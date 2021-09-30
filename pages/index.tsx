import { GetStaticProps } from "next";
import fs from "fs";
import path from "path";
import { bundleMDX } from "mdx-bundler";
import { HomePageProps } from "../src/types/pages";
import styled from "styled-components";

import { HomeView } from "../src/views/Home";

const Home: React.FC<HomePageProps> = ({
  webDevContent,
  copywritingContent,
  webDevServices,
  copywritingServices,
  callToActionContent,
}) => {
  return (
    <HomeView
      webDevPreHeadline={webDevContent.frontmatter.preHeadline as string}
      webDevHeadline={webDevContent.frontmatter.headline as string}
      webDevBodyCopy={webDevContent.code}
      webDevService1={webDevServices.service1}
      webDevService2={webDevServices.service2}
      webDevService3={webDevServices.service3}
      copywritingPreHeadline={
        copywritingContent.frontmatter.preHeadline as string
      }
      copywritingHeadline={copywritingContent.frontmatter.headline as string}
      copywritingBodyCopy={copywritingContent.code}
      copywritingService1={copywritingServices.service1}
      copywritingService2={copywritingServices.service2}
      copywritingService3={copywritingServices.service3}
      ctaPreHeadline={callToActionContent.frontmatter.preHeadline as string}
      ctaHeadline={callToActionContent.frontmatter.headline as string}
      ctaBodyCopy={callToActionContent.code}
    />
  );
};

export const getStaticProps: GetStaticProps = async () => {
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
  const webDevService1 = await getContent("web-dev-new-site");
  const webDevService2 = await getContent("web-dev-landing-page");
  const webDevService3 = await getContent("web-dev-ecom");

  const copywritingContent = await getContent("copywriting");
  const copywritingService1 = await getContent("copywriting-rewrite");
  const copywritingService2 = await getContent("copywriting-emails");
  const copywritingService3 = await getContent("copywriting-facebook-ads");

  const callToActionContent = await getContent("call-to-action");

  return {
    props: {
      webDevContent: webDevContent,
      webDevServices: {
        service1: webDevService1,
        service2: webDevService2,
        service3: webDevService3,
      },
      copywritingContent: copywritingContent,
      copywritingServices: {
        service1: copywritingService1,
        service2: copywritingService2,
        service3: copywritingService3,
      },
      callToActionContent: callToActionContent,
    },
  };
};

export default Home;
