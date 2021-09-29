interface Markdown {
  code: string;
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

export interface HomePageProps {
  webDevContent: Markdown;
  copywritingContent: Markdown;
}
