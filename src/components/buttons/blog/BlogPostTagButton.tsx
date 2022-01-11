import { useMemo } from "react";
import Link from "next/link";
import styled from "styled-components";

import { renderBlogTag } from "../../../data/blog";
import { BlogTag } from "../../../types/blog";

interface BlogPostTagChipProps {
  tag: BlogTag;
}

const TagContainer = styled.a`
  padding: 0 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.6rem;
  font-weight: 700;
  color: var(--tag-label-color);
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  text-decoration: none;
  background-color: var(--tag-background-color);
  border: none;
  border-radius: 8px;
  width: fit-content;
  height: 38px;
  cursor: pointer;
  transition: transform, box-shadow, 300ms ease-in-out;
  &:focus {
    outline-color: var(--accent-2);
    outline-width: 2px;
    outline-offset: 8px;
    outline-style: dotted;
  }
  &:hover {
    transform: translateY(-4px) scale(1.04);
    box-shadow: 0 4px 8px 1px hsla(0, 0%, 0%, 0.2);
  }
`;

export const BlogPostTagButton: React.FC<BlogPostTagChipProps> = ({ tag }) => {
  const formattedTag = useMemo(() => {
    return tag.split(" ").join("-");
  }, [tag]);

  const styles = {
    "--tag-background-color": renderBlogTag(tag).bg,
    "--tag-label-color": renderBlogTag(tag).label,
  } as React.CSSProperties;

  return (
    <Link
      href={{
        pathname: `/blog/tag/${formattedTag}`,
      }}
      passHref={true}
    >
      <TagContainer style={styles} type="button">
        {tag}
      </TagContainer>
    </Link>
  );
};
