import { GetStaticProps } from "next";
import fs from "fs";
import path from "path";
import { serialize } from "next-mdx-remote/serialize";
import matter from "gray-matter";
import { AboutPageProps } from "../src/types/pages";

import { AboutView } from "../src/views/About";
import { Seo } from "../src/Seo";
import { seo } from "../src/Seo/data";

const About: React.FC<AboutPageProps> = ({
  headerContent,
  whoContent,
  qualitiesContent,
  callToActionContent,
}) => {
  return (
    <>
      <Seo
        title={seo.about.title}
        description={seo.about.description}
        socialHeadline={seo.about.socialHeadline}
        socialDescription={seo.about.socialDescription}
        socialImage={seo.about.socialImage}
        socialSlug={seo.about.socialSlug}
      />
      <AboutView
        headerHeadline={headerContent.frontmatter.headline as string}
        introBodyCopy={whoContent}
        authenticCopy={qualitiesContent.authentic}
        clearCopy={qualitiesContent.clear}
        overdeliverCopy={qualitiesContent.overdeliver}
        ctaCopy={callToActionContent}
      />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const contentPath = path.join(process.cwd(), "data/about");
  const homeContentPath = path.join(process.cwd(), "data/home");

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

  const headerContent = await getContent("header", contentPath);
  const whoContent = await getContent("who", contentPath);
  const authentic = await getContent("authentic", contentPath);
  const clear = await getContent("clear", contentPath);
  const overdeliver = await getContent("overdeliver", contentPath);
  const callToActionContent = await getContent(
    "call-to-action",
    homeContentPath
  );

  return {
    props: {
      headerContent,
      whoContent,
      qualitiesContent: {
        authentic,
        clear,
        overdeliver,
      },
      callToActionContent,
    },
  };
};

export default About;
