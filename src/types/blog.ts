import { Markdown } from "./pages";

export interface BlogFrontmatter {
  id: string;
  date: string;
  pageTitle: string;
  pageDescription: string;
  author: string;
  featureImage: string;
  altTag: string;
  titleTag: string;
  headline: string;
  description: string;
  category: BlogCategory;
  tags: BlogTag[];
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
  ctaContent: Markdown;
  totalPages: number;
}

export interface FilteredBlogPostListPage {
  tag: BlogTag;
  posts: BlogPostCard[];
  ctaContent: Markdown;
  totalPage: number;
}

export type Headline4Type = "normal" | "call out";

export type BlogCategory =
  | "marketing"
  | "web-design"
  | "conversion"
  | "coding"
  | "portfolio";

export type BlogTag =
  | "typescript"
  | "javascript"
  | "react"
  | "faunadb"
  | "cloudflare"
  | "images"
  | "node"
  | "go"
  | "swift"
  | "dates"
  | "marketing book review"
  | "coding book review"
  | "media buying"
  | "copywriting"
  | "conversion"
  | "portfolio"
  | "web dev"
  | "css"
  | "marketing course review"
  | "coding course review"
  | "serverless"
  | "all";

export interface BlogTagMetaData {
  bg: string;
  label: string;
  category: BlogCategory;
}
