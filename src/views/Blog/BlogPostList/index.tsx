import styled from "styled-components";

import { List } from "./List";
import { BlogPostCard } from "../../../types/blog";

interface BlogPostListProps {
  posts: BlogPostCard[];
}

const ViewContainer = styled.div`
  padding: 40px 12px;
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;
  gap: 120px;
  width: 100%;
`;

export const BlogPostList: React.FC<BlogPostListProps> = ({ posts }) => {
  return (
    <ViewContainer>
      <List posts={posts} />
    </ViewContainer>
  );
};
