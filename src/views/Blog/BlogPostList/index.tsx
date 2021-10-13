import styled from "styled-components";

import { List } from "./List";
import { BlogHeader } from "./BlogHeader";
import { CategoryHeader } from "../PostCategoryHeader";
import { BlogPostCard } from "../../../types/blog";
import { CallToActionSection } from "../../Home/CallToActionSection";
import { Markdown } from "../../../types/pages";
import { BlogCategory } from "../../../types/blog";
import { sizes } from "../../../styles/sizes";

interface BlogPostListProps {
  posts: BlogPostCard[];
  ctaContent: Markdown;
  category?: BlogCategory;
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

export const BlogPostList: React.FC<BlogPostListProps> = ({
  posts,
  ctaContent,
  category,
}) => {
  return (
    <ViewContainer>
      {category ? <CategoryHeader category={category} /> : <BlogHeader />}
      <List posts={posts} />
      <CallToActionSection
        preHeadline={ctaContent.frontmatter.preHeadline as string}
        headline={ctaContent.frontmatter.headline as string}
        bodyCopy={ctaContent.code}
      />
    </ViewContainer>
  );
};
