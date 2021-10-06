import { GetStaticProps } from "next";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

import { BlogPostListPage } from "../../src/types/blog";

import { BlogCard } from "../../src/components/cards/BlogCard";

const Blog: React.FC<BlogPostListPage> = ({ posts }) => {
  console.log(posts);

  const blogPosts = posts.map((post) => {
    const id = post.frontmatter.id;
    const featureImage = post.frontmatter.featureImage;
    const altTag = post.frontmatter.altTag;
    const titleTag = post.frontmatter.titleTag;
    const headline = post.frontmatter.headline;
    const description = post.frontmatter.description;
    const category = post.frontmatter.category;
    const tags = post.frontmatter.tags;
    const slug = post.slug;

    return (
      <BlogCard
        key={id}
        featureImage={featureImage}
        altTag={altTag}
        titleTag={titleTag}
        headline={headline}
        description={description}
        category={category}
        tags={tags}
        slug={slug}
      />
    );
  });

  return <div style={{ padding: "60px 0" }}>{blogPosts}</div>;
};

export const getStaticProps: GetStaticProps = async () => {
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

  return {
    props: {
      posts: allPosts,
    },
  };
};

export default Blog;
