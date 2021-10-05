import { MDXRemoteSerializeResult } from "next-mdx-remote";

export interface Markdown {
  code: MDXRemoteSerializeResult<Record<string, unknown>>;
  frontmatter: {
    [key: string]: string | number;
  };
}

export interface PostProps {
  code: string;
  frontmatter: {
    [key: string]: any;
  };
}

interface Services {
  service1: Markdown;
  service2: Markdown;
  service3: Markdown;
}

export interface HomePageProps {
  webDevContent: Markdown;
  webDevServices: Services;
  copywritingContent: Markdown;
  copywritingServices: Services;
  callToActionContent: Markdown;
}

interface Qualities {
  honest: Markdown;
  clear: Markdown;
  overdeliver: Markdown;
}

export interface AboutPageProps {
  headerContent: Markdown;
  whoContent: Markdown;
  qualitiesContent: Qualities;
  callToActionContent: Markdown;
}
