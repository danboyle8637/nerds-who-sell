import styled from "styled-components";

import { renderBlogTag } from "../../data/blog";
import { BlogTag } from "../../types/blog";

interface BlogPostTagChipProps {
  tag: BlogTag;
}

const TagContainer = styled.div`
  padding: 0 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.6rem;
  font-weight: 700;
  color: var(--tag-label-color);
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  background-color: var(--tag-background-color);
  border: none;
  border-radius: 8px;
  width: fit-content;
  height: 38px;
`;

export const BlogPostTagButton: React.FC<BlogPostTagChipProps> = ({ tag }) => {
  const styles = {
    "--tag-background-color": renderBlogTag(tag).bg,
    "--tag-label-color": renderBlogTag(tag).label,
  } as React.CSSProperties;

  return <TagContainer style={styles}>{tag}</TagContainer>;
};
