import styled from "styled-components";

import { BlogPageButton } from "../buttons/blog/BlogPageButton";
import { StepBlogPageButton } from "../buttons/blog/StepBlogPageButton";
import {
  usePagination,
  Direction,
  LEFT,
  RIGHT,
} from "../../hooks/componets/usePagination";
import { nerdsWhoSellStore } from "../../../lib/store";

interface BlogPaginationProps {
  totalPages: number;
  pageNeighbors: number;
}

const PageButtonsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  justify-items: center;
  align-items: center;
  gap: 12px;
  width: fit-content;
`;

export const BlogPagination: React.FC<BlogPaginationProps> = ({
  totalPages,
  pageNeighbors,
}) => {
  const {
    activeBlogPage,
    incrementBlogPage,
    decrementBlogPage,
    updateActiveBlogPage,
  } = nerdsWhoSellStore((state) => ({
    activeBlogPage: state.activeBlogPage,
    incrementBlogPage: state.incrementActiveBlogPage,
    decrementBlogPage: state.decrementActiveBlogPage,
    updateActiveBlogPage: state.updateActiveBlogPage,
  }));

  const pages = usePagination(totalPages, pageNeighbors);

  const handleFlipPageNumber = (direction: Direction) => {
    if (direction === LEFT) {
      decrementBlogPage();
    }

    if (direction === RIGHT) {
      incrementBlogPage();
    }
  };

  const paginationPages = pages.map((page, i) => {
    if (page === LEFT) {
      return (
        <StepBlogPageButton
          key={i}
          direction={LEFT}
          activePage={activeBlogPage}
          handleStepPageNumber={handleFlipPageNumber}
        />
      );
    }

    if (page === RIGHT) {
      return (
        <StepBlogPageButton
          key={i}
          direction={RIGHT}
          activePage={activeBlogPage}
          handleStepPageNumber={handleFlipPageNumber}
        />
      );
    }

    return (
      <BlogPageButton
        key={i}
        pageNumber={page}
        currentPage={activeBlogPage}
        handleUpdateBlogPage={updateActiveBlogPage}
      >
        {page}
      </BlogPageButton>
    );
  });

  return <PageButtonsContainer>{paginationPages}</PageButtonsContainer>;
};
