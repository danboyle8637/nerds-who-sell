import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import { nerdBlogStore } from "../../../lib/blogStore";
import { BlogTag } from "../../types/blog";

export const createPageRange = (from: number, to: number, step: number = 1) => {
  let pageRange: number[] = [];

  for (let i = from; i <= to; i++) {
    pageRange = [...pageRange, i];
  }

  return pageRange;
};

export type Direction = 11111111 | 99999999;
export const LEFT = 11111111;
export const RIGHT = 99999999;

export const usePagination = (
  totalPages: number,
  pageNeighbors: number,
  tag?: BlogTag
) => {
  const [pages, setPages] = useState<number[]>([]);

  const { asPath, isReady } = useRouter();

  const { activeBlogPage, updateActiveBlogPage } = nerdBlogStore((state) => ({
    activeBlogPage: state.activeBlogPage,
    updateActiveBlogPage: state.updateActiveBlogPage,
  }));

  useEffect(() => {
    if (isReady) {
      const pathArray = asPath.split("/");
      const lastIndex = pathArray.length - 1;
      const currentPage = Number(pathArray[lastIndex]);

      if (currentPage) {
        updateActiveBlogPage(currentPage);
      } else {
        updateActiveBlogPage(1);
      }
    }
  }, [isReady, asPath, tag]);

  const getPageNumbers = () => {
    // total page numbers to show on controls
    const totalNumbers = pageNeighbors * 2 + 3;
    const totalBlocks = totalNumbers + 2;

    if (totalPages > totalBlocks) {
      const startPage = Math.max(2, activeBlogPage - pageNeighbors);
      const endPage = Math.min(totalPages - 1, activeBlogPage + pageNeighbors);
      let pages = createPageRange(startPage, endPage);

      const hasLeftSpill = startPage > 2;
      const hasRightSpill = totalPages - endPage > 1;
      const spillOffset = totalNumbers - (pages.length + 1);

      switch (true) {
        case hasLeftSpill && !hasRightSpill: {
          const extraPages = createPageRange(
            startPage - spillOffset,
            startPage - 1
          );
          pages = [LEFT, ...extraPages, ...pages];
          break;
        }
        case !hasLeftSpill && hasRightSpill: {
          const extraPages = createPageRange(
            endPage + 1,
            endPage + spillOffset
          );
          pages = [...pages, ...extraPages, RIGHT];
          break;
        }
        case hasLeftSpill && hasRightSpill:
        default: {
          pages = [LEFT, ...pages, RIGHT];
        }
      }

      return [1, ...pages, totalPages];
    }

    return createPageRange(1, totalPages);
  };

  useEffect(() => {
    const pages = getPageNumbers();
    setPages(pages);
  }, [activeBlogPage, totalPages]);

  return pages;
};
