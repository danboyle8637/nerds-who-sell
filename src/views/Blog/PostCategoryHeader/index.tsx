import styled from "styled-components";

import { RenderHeadline } from "./RenderHeadline";
import { CategoryIcon } from "../../../components/cards/BlogCard/CategoryIcon";
import { BlogCategory } from "../../../types/blog";
import { sizes } from "../../../styles/sizes";

interface HeaderProps {
  category: BlogCategory;
}

const HeaderContainer = styled.div`
  padding-top: 40px;
  display: grid;
  grid-template-columns: 1fr min-content;
  gap: 20px;
  align-items: center;
  width: fit-content;
  ${sizes.aboveIpadPro} {
    padding-top: 80px;
  }
`;

export const CategoryHeader: React.FC<HeaderProps> = ({ category }) => {
  return (
    <HeaderContainer>
      <RenderHeadline category={category} />
      <CategoryIcon category={category} />
    </HeaderContainer>
  );
};
