import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { bundleMDX } from "mdx-bundler";

export const POSTS_PATH = path.join(process.cwd(), "data/blog");

export const getSourceOfFile = (filename: string) => {
  return fs.readFileSync(path.join(POSTS_PATH, filename), "utf8");
};

export const getAllPosts = () => {
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

export const getSinglePost = async (slug: string) => {
  const source = getSourceOfFile(`${slug}.mdx`);

  const { code, frontmatter } = await bundleMDX(source, {
    cwd: POSTS_PATH,
  });

  return {
    frontmatter,
    code,
  };
};
