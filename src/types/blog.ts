import { Markdown } from "./pages";

export interface BlogFrontmatter {
  id: string;
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
  | "cloudflare workers"
  | "durable objects"
  | "images"
  | "node"
  | "go"
  | "swift"
  | "dates"
  | "book review"
  | "opinion"
  | "media buying"
  | "copywriting"
  | "email copy"
  | "conversion"
  | "portfolio";
