import { GetStaticProps, GetStaticPaths } from "next";
import Head from "next/head";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";

import { cleanBlogTag } from "../../../../src/utils/utilityFunctions";
import { BlogTag } from "../../../../src/types/blog";

const TagPage = () => {
  return <h1>Blog Tag Page 2... 3.. or 4</h1>;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const maxPostsPerPage = 8;
  // Get an array of all the tags for each blog post
  const POST_PATH = path.join(process.cwd(), "data/blog/published");

  const getSourceOfFile = (postsPath: string, filename: string) => {
    return fs.readFileSync(path.join(postsPath, filename), "utf-8");
  };

  const postTagsArray = (postsPath: string) => {
    return fs
      .readdirSync(postsPath)
      .filter((path) => /\.mdx?$/.test(path))
      .map((post) => {
        const source = getSourceOfFile(POST_PATH, post);
        const { data } = matter(source);
        const tagArray = data.tags;
        return tagArray;
      });
  };

  const posts = postTagsArray(POST_PATH);

  const createTagParamsObject = (posts: BlogTag[], tag: BlogTag) => {
    // Filter out which ones have the specific tag
    const taggedPosts = posts.filter((tagArray) => {
      for (let i = 0; i < tagArray.length; i++) {
        const cleanTag = cleanBlogTag(tagArray[i] as BlogTag);
        if (cleanTag === tag) {
          return true;
        }
      }
      return false;
    });

    const totalPosts = taggedPosts.length;
    const totalPages = Math.ceil(totalPosts / maxPostsPerPage);

    let pagePathArray: string[] = [];

    for (let i = 1; i <= totalPages; i++) {
      pagePathArray = [...pagePathArray, String(i)];
    }

    const paths = pagePathArray.map((path) => ({
      params: {
        tag: tag,
        page: path,
      },
    }));

    return paths;
  };

  const typescriptParamsObj = createTagParamsObject(posts, "typescript");
  const javascriptParamsObj = createTagParamsObject(posts, "javascript");
  const reactParamsObj = createTagParamsObject(posts, "react");
  const faunadbParamsObj = createTagParamsObject(posts, "faunadb");
  const cloudflareParamsObj = createTagParamsObject(posts, "cloudflare");
  const imagesParamsObj = createTagParamsObject(posts, "images");
  const nodeParamsObj = createTagParamsObject(posts, "node");
  const swiftParamsObj = createTagParamsObject(posts, "swift");
  const datesParamsObj = createTagParamsObject(posts, "dates");
  const marketingBookReviewParamsObj = createTagParamsObject(
    posts,
    "marketing book review"
  );
  const codingBookReviewParamsObj = createTagParamsObject(
    posts,
    "coding book review"
  );
  const mediaBuyingParamsObj = createTagParamsObject(posts, "media buying");
  const copywritingParamsObj = createTagParamsObject(posts, "copywriting");
  const conversionParamsObj = createTagParamsObject(posts, "conversion");
  const portfolioParamsObj = createTagParamsObject(posts, "portfolio");
  const webDevParamsObj = createTagParamsObject(posts, "web dev");
  const cssParamsObj = createTagParamsObject(posts, "css");
  const marketingCourseReviewParamsObj = createTagParamsObject(
    posts,
    "marketing course review"
  );
  const codingCourseReviewParamsObj = createTagParamsObject(
    posts,
    "coding course review"
  );
  const serverlessParamsObj = createTagParamsObject(posts, "serverless");

  const slugPaths = [
    ...typescriptParamsObj,
    ...javascriptParamsObj,
    ...reactParamsObj,
    ...faunadbParamsObj,
    ...cloudflareParamsObj,
    ...imagesParamsObj,
    ...nodeParamsObj,
    ...swiftParamsObj,
    ...datesParamsObj,
    ...marketingBookReviewParamsObj,
    ...codingBookReviewParamsObj,
    ...mediaBuyingParamsObj,
    ...copywritingParamsObj,
    ...conversionParamsObj,
    ...portfolioParamsObj,
    ...webDevParamsObj,
    ...cssParamsObj,
    ...marketingCourseReviewParamsObj,
    ...codingCourseReviewParamsObj,
    ...serverlessParamsObj,
  ];

  return {
    paths: slugPaths || [],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const tag = ctx.params?.tag || "";
  const pageSlug = ctx.params?.page || 0;
  const blogPostsPerPage = 8;

  const POSTS_PATH = path.join(process.cwd(), "data/blog/published");

  const getSourceOfFile = (postsPath: string, filename: string) => {
    return fs.readFileSync(path.join(postsPath, filename), "utf-8");
  };

  const getAllPosts = (postsPath: string) => {
    return fs
      .readdirSync(postsPath)
      .filter((post) => /\.mdx?$/.test(post))
      .map((post) => {
        const source = getSourceOfFile(postsPath, post);
        const slug = post.replace(/\.mdx?$/, "");
        const { data } = matter(source);

        return {
          frontmatter: data,
          slug: slug,
        };
      });
  };

  const allPosts = getAllPosts(POSTS_PATH);

  const postsByTag = allPosts.filter((post) => {
    for (let i = 0; i < post.frontmatter.tags.length; i++) {
      const cleanTag = cleanBlogTag(post.frontmatter.tags[i]);
      if (cleanTag === tag) {
        return true;
      }
    }

    return false;
  });

  const blogPostCount = postsByTag.length;
  const totalPages = Math.ceil(blogPostCount / blogPostsPerPage) + 1;

  const pageNumber = pageSlug ? Number(pageSlug) - 1 : 0;
  const firstPostIndex = blogPostsPerPage * pageNumber;
  const lastPostIndex = firstPostIndex + blogPostsPerPage;
  const pagePosts = postsByTag.slice(firstPostIndex, lastPostIndex);

  const shouldShowOptin = pageNumber + 1 > totalPages - 1;

  return {
    props: {
      blogCardsPerPage: pagePosts,
      blogPostCount: blogPostCount,
      postsPerPage: blogPostsPerPage,
      totalPages: totalPages,
      tag: tag,
      shouldShowOptin: shouldShowOptin,
    },
    revalidate: 1,
  };
};

export default TagPage;
