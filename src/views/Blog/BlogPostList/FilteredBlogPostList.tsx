import styled from "styled-components";

import { List } from "./List";
import { CategoryAndTagHeader } from "../CategoryAndTagHeader";
import { BlogPostCard } from "../../../types/blog";
import { BlogPagination } from "../../../components/navigation/BlogPagination";
import { BlogTag } from "../../../types/blog";
import { sizes } from "../../../styles/sizes";

interface FilteredPostListProps {
  tag: BlogTag;
  posts: BlogPostCard[];
  totalPages: number;
}

const ViewContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;
  gap: 120px;
  justify-items: center;
  width: 100%;
`;

const ListContainer = styled.div`
  padding: 0 12px;
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;
  gap: 60px;
  justify-items: center;
  width: 100%;
  ${sizes.aboveIpadPro} {
    padding: 0;
  }
`;

export const FilteredBlogPostList: React.FC<FilteredPostListProps> = ({
  tag,
  posts,
  totalPages,
}) => {
  return (
    <ViewContainer>
      <ListContainer>
        <CategoryAndTagHeader tag={tag} />
        <List posts={posts} />
        <BlogPagination totalPages={totalPages} pageNeighbors={1} />
      </ListContainer>
    </ViewContainer>
  );
};
