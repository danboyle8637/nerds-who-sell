import { GetStaticPaths, GetStaticProps } from "next";
import fs from "fs";
import path from "path";
import { serialize } from "next-mdx-remote/serialize";
import matter from "gray-matter";
import { PostProps } from "../../src/types/pages";
import { BlogFrontmatter } from "../../src/types/blog";

import { BlogPostView } from "../../src/views/Blog/BlogPost";
import { Seo } from "../../src/Seo";

const Post: React.FC<PostProps> = ({ code, frontmatter }) => {
  return (
    <>
      <Seo
        title={frontmatter.pageTitle}
        description={frontmatter.pageDescription}
        socialHeadline={frontmatter.socialHeadline}
        socialDescription={frontmatter.socialDescription}
        socialImage={frontmatter.socialImage}
        socialSlug={frontmatter.socialSlug}
      />
      <BlogPostView
        frontmatter={frontmatter as BlogFrontmatter}
        content={code}
      />
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug || "";

  const POSTS_PATH = path.join(process.cwd(), "data/blog/2021");

  const getSourceOfFile = (filename: string) => {
    return fs.readFileSync(path.join(POSTS_PATH, filename), "utf8");
  };

  const getSinglePost = async (slug: string) => {
    const source = getSourceOfFile(`${slug}.mdx`);

    const { content, data } = matter(source);
    const mdxString = await serialize(content);

    return {
      frontmatter: data,
      code: mdxString,
    };
  };

  const { code, frontmatter } = await getSinglePost(slug as string);

  return {
    props: {
      code,
      frontmatter,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const currentYear = new Date().getFullYear();

  const POSTS_PATH = path.join(process.cwd(), `data/blog/${currentYear}`);

  const getSourceOfFile = (filename: string) => {
    return fs.readFileSync(path.join(POSTS_PATH, filename), "utf8");
  };

  const getAllSlugs = () => {
    return fs
      .readdirSync(POSTS_PATH)
      .filter((path) => /\.mdx?$/.test(path))
      .map((post) => {
        const source = getSourceOfFile(post);
        const slug = post.replace(/\.mdx?$/, "");

        return {
          slug: slug,
        };
      });
  };

  const paths = getAllSlugs().map(({ slug }) => {
    return {
      params: {
        slug: slug,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export default Post;
