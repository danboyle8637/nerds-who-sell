export interface Markdown {
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
