interface BlogFrontmatter {
  id: string;
  pageTitle: string;
  pageDescription: string;
  author: string;
  featureImage: string;
  headline: string;
  description: string;
  tags: string[];
  socialImage: string;
  socialHeadling: string;
  socialDescription: string;
  socialLink: string;
}

export interface BlogPostCard {
  frontmatter: BlogFrontmatter;
  slug: string;
}

export interface BlogPostListPage {
  posts: BlogPostCard[];
}
