import { useMemo } from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import fs from "fs";
import path from "path";
import { bundleMDX } from "mdx-bundler";
import { getMDXComponent } from "mdx-bundler/client";
import { PostSlug, PostSlugs } from "../../src/types/api";
import { PostProps } from "../../src/types/pages";

const Post: React.FC<PostProps> = ({ code, frontmatter }) => {
  const Component = useMemo(() => getMDXComponent(code), [code]);

  return (
    <div style={{ width: "100%" }}>
      <h1>{frontmatter.title}</h1>
      <Component />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug || "";

  const POSTS_PATH = path.join(process.cwd(), "data/blog");

  const getSourceOfFile = (filename: string) => {
    return fs.readFileSync(path.join(POSTS_PATH, filename), "utf8");
  };

  const getSinglePost = async (slug: string) => {
    const source = getSourceOfFile(`${slug}.mdx`);

    const { code, frontmatter } = await bundleMDX(source, {
      cwd: POSTS_PATH,
      esbuildOptions: (options) => {
        options.platform = "node";
        return options;
      },
    });

    return {
      frontmatter,
      code,
    };
  };

  const post = await getSinglePost(slug as string);

  return {
    props: {
      ...post,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const POSTS_PATH = path.join(process.cwd(), "data/blog");

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
