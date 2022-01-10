import { GetStaticProps } from "next";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";

import { BlogPostList } from "../src/views/Blog/BlogPostList";
import { BlogPostListPage } from "../src/types/blog";
import { Seo } from "../src/Seo";
import { seo } from "../src/Seo/data";

const Portgolio: React.FC<BlogPostListPage> = ({
  posts,
  ctaContent,
  totalPages,
}) => {
  return (
    <>
      <Seo
        title={seo.portfolio.title}
        description={seo.portfolio.description}
        socialHeadline={seo.portfolio.socialHeadline}
        socialDescription={seo.portfolio.socialDescription}
        socialImage={seo.portfolio.socialImage}
        socialSlug={seo.portfolio.socialSlug}
      />
      <BlogPostList
        posts={posts}
        ctaContent={ctaContent}
        category="portfolio"
        totalPages={totalPages}
      />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const POSTS_PATH_2021 = path.join(process.cwd(), "data/blog/published");
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

  const totalPosts = portfolioPosts.length;
  const postsPerPage = 8;
  const totalPages = Math.ceil(totalPosts / postsPerPage);

  return {
    props: {
      posts: portfolioPosts,
      ctaContent: ctaContent,
      totalPages: totalPages,
    },
  };
};

export default Portgolio;
