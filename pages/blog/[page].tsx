import { GetStaticPaths, GetStaticProps } from "next";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";

const BlogListPage = () => {};

export const getStaticPaths: GetStaticPaths = async () => {
  const POSTS_PATH_2021 = path.join(process.cwd(), "data/blog/2021");

  const getSourceOfFile = (postsPath: string, filename: string) => {
    return fs.readFileSync(path.join(postsPath, filename), "utf8");
  };

  const getAllPosts = (postsPath: string) => {
    return fs
      .readdirSync(postsPath)
      .filter((path) => /\.mdx?$/.test(path))
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

  const posts2021 = getAllPosts(POSTS_PATH_2021);

  const allPosts = [...posts2021];

  const publishedPosts = allPosts.filter((post) => {
    const isDraft = post.frontmatter.draft;
    return !isDraft;
  });

  const totalPublishedPosts = publishedPosts.length;
  const maxPostsPerPage = 6;
  const totalPages = Math.ceil(totalPublishedPosts / maxPostsPerPage);

  let pagePathArray: string[] = [];

  for (let i = 1; i < totalPages + 1; i++) {
    pagePathArray = [...pagePathArray, String(i)];
  }

  const slugPaths = pagePathArray.map((path) => ({
    params: {
      page: path,
    },
  }));

  return {
    paths: slugPaths || [],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const pageSlug = ctx.params?.page || 0;

  const POSTS_PATH_2021 = path.join(process.cwd(), "data/blog/2021");
  const contentPath = path.join(process.cwd(), "data/home");

  const getSourceOfFile = (postsPath: string, filename: string) => {
    return fs.readFileSync(path.join(postsPath, filename), "utf8");
  };

  const getContent = async (filename: string, sourcePath: string) => {
    const source = getSourceOfFile(sourcePath, `${filename}.mdx`);

    const { content, data } = matter(source);
    const mdxString = await serialize(content);

    return {
      frontmatter: data,
      code: mdxString,
    };
  };

  const getAllPosts = (postsPath: string) => {
    return fs
      .readdirSync(postsPath)
      .filter((path) => /\.mdx?$/.test(path))
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

  const ctaContent = await getContent("call-to-action", contentPath);

  const posts2021 = getAllPosts(POSTS_PATH_2021);

  const allPosts = [...posts2021];

  const publishedPosts = allPosts.filter((post) => {
    const isDraft = post.frontmatter.draft;
    return !isDraft;
  });

  const pageNumber = pageSlug ? Number(pageSlug) - 1 : 0;
  const totalPosts = publishedPosts.length;
  const postsPerPage = 8;
  const firstPost = postsPerPage * pageNumber;
  const lastPost = firstPost + postsPerPage;
  const pagePosts = publishedPosts.slice(firstPost, lastPost);
  const totalPages = Math.ceil(publishedPosts.length / postsPerPage) + 1;
  const shouldShowBlogOptin = pageNumber + 1 > totalPages - 1;

  return {
    props: {
      posts: pagePosts,
      ctaContent: ctaContent,
      postsPerPage: postsPerPage,
      totalPages: totalPages,
      shouldShowBlogOptin: shouldShowBlogOptin,
    },
    revalidate: 1,
  };
};
