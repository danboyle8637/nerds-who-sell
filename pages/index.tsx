import React, { useMemo } from "react";
import { GetStaticProps } from "next";
import fs from "fs";
import path from "path";
import { bundleMDX } from "mdx-bundler";
import { getMDXComponent } from "mdx-bundler/client";
import { HomePageProps } from "../src/types/pages";
import styled from "styled-components";

import { HomeView } from "../src/views/Home";

const Home: React.FC<HomePageProps> = ({
  webDevContent,
  copywritingContent,
}) => {
  const WebDevComponent = useMemo(
    () => getMDXComponent(webDevContent.code),
    [webDevContent.code]
  );

  const CopywritingCompoent = useMemo(
    () => getMDXComponent(copywritingContent.code),
    [copywritingContent.code]
  );

  return (
    <HomeView
      webDevPreHeadline={webDevContent.frontmatter.preHeadline as string}
      webDevHeadline={webDevContent.frontmatter.headline as string}
      webDevBodyCopy={webDevContent.code}
    />
  );
};

export const getStaticProps = async () => {
  const contentPath = path.join(process.cwd(), "data/home");

  const getSourceOfFile = (filename: string) => {
    return fs.readFileSync(path.join(contentPath, filename), "utf8");
  };

  const getContent = async (filename: string) => {
    const source = getSourceOfFile(`${filename}.mdx`);

    const { code, frontmatter } = await bundleMDX(source, {
      cwd: contentPath,
      esbuildOptions: (options) => {
        options.platform = "node";
        return options;
      },
    });

    return {
      code,
      frontmatter,
    };
  };

  const webDevContent = await getContent("web-dev");
  const copywritingContent = await getContent("copywriting");

  return {
    props: {
      webDevContent: webDevContent,
      copywritingContent: copywritingContent,
    },
  };
};

export default Home;
