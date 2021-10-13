import { GetStaticProps } from "next";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";

import { BlogPostList } from "../src/views/Blog/BlogPostList";
import { BlogPostListPage } from "../src/types/blog";

const Portgolio: React.FC<BlogPostListPage> = ({ posts, ctaContent }) => {
  return (
    <BlogPostList posts={posts} ctaContent={ctaContent} category="portfolio" />
  );
};

export const getStaticProps: GetStaticProps = async () => {
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

  const portfolioPosts = allPosts.filter((post) => {
    const portfolioPosts =
      post.frontmatter.draft === false &&
      post.frontmatter.category === "portfolio";

    return portfolioPosts;
  });

  return {
    props: {
      posts: portfolioPosts,
      ctaContent: ctaContent,
    },
  };
};

export default Portgolio;
