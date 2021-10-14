import { useState, useEffect } from "react";
import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";

import { BlogPostList } from "../../../src/views/Blog/BlogPostList";
import {
  cleanBlogTag,
  filterBlogCategory,
} from "../../../src/utils/utilityFunctions";
import {
  BlogPostListPage,
  BlogPostCard,
  BlogTag,
} from "../../../src/types/blog";

const TagPostList: React.FC<BlogPostListPage> = ({
  posts,
  ctaContent,
  totalPages,
}) => {
  const [tag, setTag] = useState<BlogTag>("all");
  const [filteredPosts, setFilteredPosts] = useState<BlogPostCard[]>([]);

  const { isReady, query } = useRouter();

  useEffect(() => {
    if (isReady) {
      const currentTag = query.tag;
      if (currentTag && typeof currentTag === "string") {
        const cleanTag = cleanBlogTag(currentTag as BlogTag);
        const filteredPosts = posts.filter((post) => {
          const tags = post.frontmatter.tags;

          for (let i = 0; i < tags.length; i++) {
            if (tags[i] === cleanTag) {
              return true;
            }
          }

          return false;
        });

        setTag(cleanTag as BlogTag);
        setFilteredPosts(filteredPosts);
      }
    }
  }, [isReady, query, posts]);

  return (
    <BlogPostList
      posts={filteredPosts}
      ctaContent={ctaContent}
      category={filterBlogCategory(tag)}
      totalPages={totalPages}
    />
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

  const publishedPosts = allPosts.filter((post) => {
    const isDraft = post.frontmatter.draft;
    return !isDraft;
  });

  const totalPosts = publishedPosts.length;
  const postsPerPage = 8;
  const totalPages = Math.ceil(totalPosts / postsPerPage);

  return {
    props: {
      posts: publishedPosts,
      ctaContent: ctaContent,
      totalPages: totalPages,
    },
  };
};

export default TagPostList;
