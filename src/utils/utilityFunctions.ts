import { BlogCategory, BlogTag } from "../types/blog";

export const capitalizeName = (name: string) => {
  const nameArray = name.split("");
  const firstChar = nameArray.shift()?.toUpperCase();

  if (firstChar) {
    nameArray.unshift(firstChar);
    const cappedName = nameArray.join("");

    return cappedName;
  } else {
    return "";
  }
};

export const useImageTransformations = (
  url: string,
  transformationString: string
): string => {
  const splitUrl = url.split("2021");
  const blurred = "tr:w-10,bl-2";
  const progressive = "tr:pr-true";
  const fullUrl = [splitUrl[0], `2021/${progressive}`, splitUrl[1]].join("");
  return fullUrl;
};

export const randomValue = (max: number): number => {
  return Math.floor(Math.random() * max);
};

export const randomNegOne = () => {
  const rand = Math.random();
  if (rand > 0.5) {
    return -1;
  } else {
    return 1;
  }
};

// export const cleanBlogTag = (tag: BlogTag) => {
//   return tag.split("-").join(" ");
// };

export const filterBlogCategory = (tag: BlogTag): BlogCategory => {
  switch (tag) {
    case "web dev":
      return "coding";
    case "typescript":
      return "coding";
    case "swift":
      return "coding";
    case "react":
      return "coding";
    case "portfolio":
      return "portfolio";
    case "node":
      return "coding";
    case "media buying":
      return "conversion";
    case "marketing book review":
      return "marketing";
    case "javascript":
      return "coding";
    case "images":
      return "web-design";
    case "go":
      return "coding";
    case "faunadb":
      return "coding";
    case "email copy":
      return "conversion";
    case "durable objects":
      return "coding";
    case "dates":
      return "coding";
    case "copywriting":
      return "conversion";
    case "conversion":
      return "conversion";
    case "coding book review":
      return "coding";
    case "cloudflare workers":
      return "coding";
    case "all":
      return "web-design";
    default: {
      throw new Error(
        "You did not handle all of the blog tags. In utility functions."
      );
    }
  }
};

export const cleanBlogTag = (tag: BlogTag) => {
  return tag.split(" ").join("-");
};
