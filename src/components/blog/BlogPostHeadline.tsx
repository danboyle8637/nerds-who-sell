import styled from "styled-components";

import { largeHeadline, smallHeadline } from "../../styles/typography";
import { CategoryIcon } from "../cards/BlogCard/CategoryIcon";
import { BlogCategory } from "../../types/blog";
import { sizes } from "../../styles/sizes";
import { useCallback } from "react";

interface BlogPostHeadlineProps {
  headline: string;
  category: BlogCategory;
}

const HeadlineContainer = styled.div`
  padding: 0 12px;
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;
  gap: 20px;
  justify-items: center;
  width: 100%;
  ${sizes.aboveMobile} {
    grid-template-columns: min-content 1fr;
    justify-items: start;
    align-items: start;
  }
  ${sizes.aboveTablet} {
    padding: 0;
  }
`;

const PostHeadline = styled.h1`
  ${largeHeadline}
  font-size: 4rem;
  text-align: center;
  ${sizes.aboveTablet} {
    font-size: 6.8rem;
    text-align: start;
  }
`;

const CategoryIconContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;
  gap: 8px;
  justify-items: center;
`;

const CategoryLabel = styled.p`
  ${smallHeadline}
  font-size: 1.2rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.16rem;
  ${sizes.aboveMobile} {
    font-size: 1.2rem;
    font-weight: 800;
  }
`;

export const BlogPostHeadline: React.FC<BlogPostHeadlineProps> = ({
  headline,
  category,
}) => {
  const renderCategoryLabel = useCallback(() => {
    switch (category) {
      case "coding":
        return "coding";
      case "conversion":
        return "coversion";
      case "marketing":
        return "marketing";
      case "web-design":
        return "design";
      default: {
        throw new Error(
          "You are missing a category in the blog post headline."
        );
      }
    }
  }, [category]);

  return (
    <HeadlineContainer>
      <CategoryIconContainer>
        <CategoryIcon category={category} />
        <CategoryLabel>{renderCategoryLabel()}</CategoryLabel>
      </CategoryIconContainer>
      <PostHeadline>{headline}</PostHeadline>
    </HeadlineContainer>
  );
};
