import { GetStaticProps, GetStaticPaths } from "next";
import Head from "next/head";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";

import { BlogHeader } from "../../../../src/views/Blog/BlogPostList/BlogHeader";
// import { PostListSection } from "../../../../src/views/blog/PostListSection";
// import { BlogPagination } from "../../../../src/components/navigation/pagination/Blog";
// import { FilterSection } from "../../../../src/views/blog/FilterSection";
import { tagArray } from "../../../../src/data/blog";
import { BlogTag, FilteredBlogPostListPage } from "../../../../src/types/blog";
import {
  capitalizeName,
  cleanBlogTag,
} from "../../../../src/utils/utilityFunctions";

const BlogTagPage: React.FC<FilteredBlogPostListPage> = ({
  posts,
  totalPage,
}) => {
  // const currentTag = capitalizeName(tag ? tag : "all posts");

  return (
    <>
      <Head>
        <meta name="robots" content="noindex" />
      </Head>
      <BlogHeader />
      <div style={{ width: "100%", height: "800px" }} />
      {/* <Seo
        title={`Expore Blog Posts About The ${currentTag} Tag`}
        description={`These are all the posts we have currently about the ${currentTag} tag. Keep learning to get strong and fit.`}
      /> */}
      <BlogHeader />
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

  const sorted = filteredPosts.sort((a, b) => {
    const aDate = a.frontmatter.date;
    const bDate = b.frontmatter.date;

    if (aDate > bDate) {
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
      posts: sorted,
      totalPages: totalPages,
    },
  };
};

export default BlogTagPage;
