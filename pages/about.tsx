import { GetStaticProps } from "next";
import fs from "fs";
import path from "path";
import { serialize } from "next-mdx-remote/serialize";
import matter from "gray-matter";
import { AboutPageProps } from "../src/types/pages";

import { AboutView } from "../src/views/About";

const About: React.FC<AboutPageProps> = ({
  headerContent,
  whoContent,
  qualitiesContent,
  callToActionContent,
}) => {
  return (
    <AboutView
      headerHeadline={headerContent.frontmatter.headline as string}
      introBodyCopy={whoContent}
    />
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
  const honest = await getContent("honest", contentPath);
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
        honest,
        clear,
        overdeliver,
      },
      callToActionContent,
    },
  };
};

export default About;
