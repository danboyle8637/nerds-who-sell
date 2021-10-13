import { GetStaticProps } from "next";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";

import { ThankYouPageProps } from "../../src/types/pages";

const QuizForm: React.FC<ThankYouPageProps> = ({ content }) => {};

export const getStaticProps: GetStaticProps = async () => {
  const contentPath = path.join(process.cwd(), "data/thank-you");

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

  const thankYouContent = await getContent("quiz-form", contentPath);

  return {
    props: {
      content: thankYouContent,
    },
  };
};

export default QuizForm;
