import { GetStaticProps, GetStaticPaths } from "next";
import Head from "next/head";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";

import { FilteredBlogPostList } from "../../../../src/views/Blog/BlogPostList/FilteredBlogPostList";
import { BlogPagination } from "../../../../src/components/navigation/BlogPagination";
import { tagArray } from "../../../../src/data/blog";
import { BlogTag, FilteredBlogPostListPage } from "../../../../src/types/blog";
import {
  capitalizeName,
  cleanBlogTag,
} from "../../../../src/utils/utilityFunctions";
import { Seo } from "../../../../src/Seo";

const BlogTagPage: React.FC<FilteredBlogPostListPage> = ({
  tag,
  posts,
  totalPage,
}) => {
  const currentTag = capitalizeName(tag ? tag : "all posts");

  return (
    <>
      {tag ? (
        <>
          <Seo
            title={`Expore Blog Posts About The ${currentTag} Tag`}
            description={`These are all the posts we have currently about the ${currentTag} tag. Keep learning to get strong and fit.`}
          />
          <Head>
            <meta name="robots" content="noindex" />
          </Head>
          <FilteredBlogPostList
            tag={tag}
            posts={posts}
            totalPages={totalPage}
          />
          <BlogPagination totalPages={totalPage} pageNeighbors={2} />
        </>
      ) : null}
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const slugPaths = tagArray.map((tag) => {
    const cleanTag = cleanBlogTag(tag);

    return {
      params: {
        tag: cleanTag,
      },
    };
  });

  return {
    paths: slugPaths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const tag = ctx.params?.tag as BlogTag;

  const POSTS_PATH = path.join(process.cwd(), "data/blog/published");
  const contentPath = path.join(process.cwd(), "data/home");

  const getSourceOfFile = (postsPath: string, filename: string) => {
    return fs.readFileSync(path.join(postsPath, filename), "utf-8");
  };

  // Will need this when I put in custom call to action at the bottom
  const getContent = async (filename: string, sourcePath: string) => {
    const source = getSourceOfFile(sourcePath, `${filename}.mdx`);

    const { content, data } = matter(source);
    const mdxString = await serialize(content);

    return {
      frontmatter: data,
      code: mdxString,
    };
  };

  const getTaggedPosts = (postsPath: string) => {
    return fs
      .readdirSync(postsPath)
      .filter((path) => /\.mdx?$/.test(path))
      .filter((post) => {
        const source = getSourceOfFile(postsPath, post);
        const { data } = matter(source);
        const tagArray = data.tags;
        return tagArray.includes(tag);
      })
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

  const filteredPosts = await getTaggedPosts(POSTS_PATH);
  const ctaContent = await getContent("call-to-action", contentPath);

  const sorted = filteredPosts.sort((a, b) => {
    const aDate = a.frontmatter.date;
    const bDate = b.frontmatter.date;

    if (aDate < bDate) {
      return -1;
    } else {
      return 1;
    }
  });

  const totalPosts = filteredPosts.length;
  const postsPerPage = 8;
  const totalPages = Math.ceil(totalPosts / postsPerPage);

  return {
    props: {
      tag: tag,
      posts: sorted,
      totalPages: totalPages,
    },
  };
};

export default BlogTagPage;
