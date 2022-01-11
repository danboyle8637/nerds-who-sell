import styled from "styled-components";

import { text36, text56 } from "../../../styles/typography";
import { CategoryIcon } from "../../../components/cards/BlogCard/CategoryIcon";
import { BlogPostTagButton } from "../../../components/chips/BlogPostTagChip";
import { renderBlogTag } from "../../../data/blog";
import { BlogTag } from "../../../types/blog";
import { sizes } from "../../../styles/sizes";

interface HeaderProps {
  tag: BlogTag;
}

const HeaderContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;
  gap: 20px;
  justify-items: center;
  width: 100%;
`;

const CategoryContainer = styled.div`
  padding-top: 40px;
  display: grid;
  grid-template-columns: min-content 1fr;
  gap: 20px;
  align-items: center;
  width: fit-content;
  ${sizes.aboveIpadPro} {
    padding-top: 80px;
  }
`;

const Headline = styled.h1`
  ${text36}
  font-family: 'VT323', monospace;
  width: 100%;
  ${sizes.aboveMobile} {
    ${text56}
  }
`;

export const CategoryAndTagHeader: React.FC<HeaderProps> = ({ tag }) => {
  return (
    <HeaderContainer>
      <CategoryContainer>
        <CategoryIcon category={renderBlogTag(tag).category} />
        <Headline>{renderBlogTag(tag).category}</Headline>
      </CategoryContainer>
      <BlogPostTagButton tag={tag} />
    </HeaderContainer>
  );
};
