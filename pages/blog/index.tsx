import { GetStaticProps } from "next";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

const Blog = () => {
  return <h1>Blog</h1>;
};

export const getStaticProps: GetStaticProps = async () => {
  const POSTS_PATH = path.join(process.cwd(), "data/blog");

  const getSourceOfFile = (filename: string) => {
    return fs.readFileSync(path.join(POSTS_PATH, filename), "utf8");
  };

  const getAllPosts = () => {
    return fs
      .readdirSync(POSTS_PATH)
      .filter((path) => /\.mdx?$/.test(path))
      .map((post) => {
        const source = getSourceOfFile(post);
        const slug = post.replace(/\.mdx?$/, "");
        const { data } = matter(source);

        return {
          frontmatter: data,
          slug: slug,
        };
      });
  };

  const posts = getAllPosts();

  return {
    props: {
      posts: posts,
    },
  };
};

export default Blog;
