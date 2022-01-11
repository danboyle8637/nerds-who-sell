import { BlogTag, BlogTagMetaData } from "../types/blog";

export const tagArray: BlogTag[] = [
  "typescript",
  "javascript",
  "react",
  "faunadb",
  "cloudflare",
  "images",
  "node",
  "swift",
  "dates",
  "marketing book review",
  "coding book review",
  "media buying",
  "copywriting",
  "conversion",
  "portfolio",
  "web dev",
  "css",
  "marketing course review",
  "coding course review",
  "serverless",
  "all",
];

export const renderBlogTag = (tag: BlogTag): BlogTagMetaData => {
  switch (tag) {
    case "conversion":
      return {
        bg: "#E80C6D",
        label: "var(--base-text-color)",
        category: "conversion",
      };
    case "copywriting":
      return {
        bg: "#2CA6E8",
        label: "var(--base-text-color)",
        category: "conversion",
      };
    case "dates":
      return {
        bg: "#4F30FF",
        label: "var(--base-text-color)",
        category: "coding",
      };
    case "faunadb":
      return {
        bg: "#7C54FA",
        label: "var(--base-text-color)",
        category: "coding",
      };
    case "go":
      return {
        bg: "#003AFA",
        label: "var(--base-text-color)",
        category: "coding",
      };
    case "images":
      return {
        bg: "#FD6258",
        label: "var(--base-text-color)",
        category: "web-design",
      };
    case "javascript":
      return {
        bg: "#FCD92B",
        label: "var(--section-background-5)",
        category: "coding",
      };
    case "media buying":
      return {
        bg: "#5CC1F2",
        label: "var(--section-background-5)",
        category: "marketing",
      };
    case "node":
      return {
        bg: "#22E62F",
        label: "var(--section-background-5)",
        category: "coding",
      };
    case "react":
      return {
        bg: "#3D83D4",
        label: "var(--base-text-color)",
        category: "coding",
      };
    case "swift":
      return {
        bg: "#EB5D36",
        label: "var(--base-text-color)",
        category: "coding",
      };
    case "typescript":
      return {
        bg: "#2C58D4",
        label: "var(--base-text-color)",
        category: "coding",
      };
    case "coding book review":
      return {
        bg: "#7351F6",
        label: "var(--base-text-color)",
        category: "coding",
      };
    case "marketing book review":
      return {
        bg: "#F63B69",
        label: "var(--base-text-color)",
        category: "marketing",
      };
    case "cloudflare":
      return {
        bg: "#F8B63C",
        label: "var(--section-background-5)",
        category: "coding",
      };
    case "portfolio":
      return {
        bg: "#A9006A",
        label: "var(--base-text-color)",
        category: "portfolio",
      };
    case "web dev":
      return {
        bg: "#6063a7",
        label: "var(--base-text-color)",
        category: "coding",
      };
    case "coding course review":
      return {
        bg: "#47b896",
        label: "var(--base-text-color)",
        category: "coding",
      };
    case "marketing course review":
      return {
        bg: "#df5220",
        label: "var(--base-text-color)",
        category: "marketing",
      };
    case "css":
      return {
        bg: "#5d5da2",
        label: "var(--base-text-color)",
        category: "coding",
      };
    case "serverless":
      return {
        bg: "#cc3390",
        label: "var(--base-text-color)",
        category: "coding",
      };
    default: {
      return {
        bg: "#cc3390",
        label: "var(--base-text-color)",
        category: "web-design",
      };
    }
  }
};
