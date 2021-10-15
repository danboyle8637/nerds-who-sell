import { GetStaticProps } from "next";
import fs from "fs";
import path from "path";
import { serialize } from "next-mdx-remote/serialize";
import matter from "gray-matter";
import { HomePageProps } from "../src/types/pages";

import { HomeView } from "../src/views/Home";
import { Seo } from "../src/Seo";
import { seo } from "../src/Seo/data";

const Home: React.FC<HomePageProps> = ({
  webDevContent,
  copywritingContent,
  webDevServices,
  copywritingServices,
  callToActionContent,
}) => {
  return (
    <>
      <Seo
        title={seo.home.title}
        description={seo.home.description}
        socialHeadline={seo.home.socialHeadline}
        socialDescription={seo.home.socialDescription}
        socialImage={seo.home.socialImage}
        socialSlug={seo.home.socialSlug}
      />
      <HomeView
        webDevContent={webDevContent}
        webDevServices={webDevServices}
        copywritingContent={copywritingContent}
        copywritingServices={copywritingServices}
        ctaContent={callToActionContent}
      />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const contentPath = path.join(process.cwd(), "data/home");

  const getSourceOfFile = (filename: string, sourcePath: string) => {
    return fs.readFileSync(path.join(sourcePath, filename), "utf8");
  };

  const getContent = async (filename: string, sourcePath: string) => {
    const source = getSourceOfFile(`${filename}.mdx`, sourcePath);

    const { content, data } = matter(source);
    const mdxString = await serialize(content);

    return {
      frontmatter: data,
      code: mdxString,
    };
  };

  const webDevContent = await getContent("web-dev", contentPath);
  const webDevService1 = await getContent("web-dev-new-site", contentPath);
  const webDevService2 = await getContent("web-dev-landing-page", contentPath);
  const webDevService3 = await getContent("web-dev-ecom", contentPath);

  const copywritingContent = await getContent("copywriting", contentPath);
  const copywritingService1 = await getContent(
    "copywriting-rewrite",
    contentPath
  );
  const copywritingService2 = await getContent(
    "copywriting-emails",
    contentPath
  );
  const copywritingService3 = await getContent(
    "copywriting-facebook-ads",
    contentPath
  );

  const callToActionContent = await getContent("call-to-action", contentPath);

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
