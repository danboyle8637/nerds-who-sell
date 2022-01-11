import create, { SetState } from "zustand";

import { BlogTag } from "../src/types/blog";

type BlogState = {
  activeBlogPage: number;
  incrementActiveBlogPage: () => void;
  decrementActiveBlogPage: () => void;
  updateActiveBlogPage: (page: number) => void;
  activeTag: BlogTag;
  updateActiveTag: (tag: BlogTag) => void;
};

export const nerdBlogStore = create<BlogState>((set: SetState<BlogState>) => ({
  activeBlogPage: 0,
  incrementActiveBlogPage: () =>
    set((state) => ({
      ...state,
      activeBlogPage: state.activeBlogPage++,
    })),
  decrementActiveBlogPage: () =>
    set((state) => ({
      ...state,
      activeBlogPage: state.activeBlogPage--,
    })),
  updateActiveBlogPage: (page) =>
    set((state) => ({
      ...state,
      activeBlogPage: page,
    })),
  activeTag: "all",
  updateActiveTag: (tag) =>
    set((state) => ({
      ...state,
      activeTag: tag,
    })),
}));
