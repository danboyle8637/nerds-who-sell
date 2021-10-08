import { GetStaticProps } from "next";
import fs from "fs";
import path from "path";
import { serialize } from "next-mdx-remote/serialize";
import matter from "gray-matter";

import { PrivacyView } from "../../src/views/legal/privacy";
import { PrivacyViewProps } from "../../src/types/pages";

const Privacy: React.FC<PrivacyViewProps> = ({ privacyCopy }) => {
  return (
    <PrivacyView
      headline={privacyCopy.frontmatter.headline as string}
      bodyCopy={privacyCopy.code}
    />
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const contentPath = path.join(process.cwd(), "data/legal");

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

  const privacyCopy = await getContent("privacy", contentPath);

  return {
    props: {
      privacyCopy: privacyCopy,
    },
  };
};

export default Privacy;
