import styled from "styled-components";

import { List } from "./List";
import { BlogHeader } from "./BlogHeader";
import { CategoryHeader } from "../PostCategoryHeader";
import { BlogPostCard } from "../../../types/blog";
import { BlogPagination } from "../../../components/navigation/BlogPagination";
import { CallToActionSection } from "../../Home/CallToActionSection";
import { Markdown } from "../../../types/pages";
import { BlogCategory } from "../../../types/blog";
import { sizes } from "../../../styles/sizes";

interface BlogPostListProps {
  posts: BlogPostCard[];
  ctaContent: Markdown;
  category?: BlogCategory;
  totalPages: number;
}

const ViewContainer = styled.div`
  padding: 0 12px;
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;
  gap: 120px;
  justify-items: center;
  width: 100%;
  ${sizes.aboveIpadPro} {
    padding: 0;
  }
`;

const ListContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;
  gap: 60px;
  justify-items: center;
  width: 100%;
`;

export const BlogPostList: React.FC<BlogPostListProps> = ({
  posts,
  ctaContent,
  category,
  totalPages,
}) => {
  return (
    <ViewContainer>
      {category ? <CategoryHeader category={category} /> : <BlogHeader />}
      <ListContainer>
        <List posts={posts} />
        <BlogPagination totalPages={totalPages} pageNeighbors={1} />
      </ListContainer>
      <CallToActionSection
        preHeadline={ctaContent.frontmatter.preHeadline as string}
        headline={ctaContent.frontmatter.headline as string}
        bodyCopy={ctaContent.code}
      />
    </ViewContainer>
  );
};
