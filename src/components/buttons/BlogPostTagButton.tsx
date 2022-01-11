import { useCallback, useMemo } from "react";
import Link from "next/link";
import styled from "styled-components";

import { BlogTag } from "../../types/blog";

interface BlogPostTagChipProps {
  tag: BlogTag;
  handleClick: () => void;
}

const TagContainer = styled.a`
  padding: 0 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.6rem;
  font-weight: 700;
  color: var(--base-text-color);
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

export const BlogPostTagButton: React.FC<BlogPostTagChipProps> = ({
  tag,
  handleClick,
}) => {
  const renderTagColor = useCallback(() => {
    switch (tag) {
      case "conversion":
        return "#E80C6D";
      case "copywriting":
        return "#2CA6E8";
      case "dates":
        return "#4F30FF";
      case "faunadb":
        return "#7C54FA";
      case "go":
        return "#003AFA";
      case "images":
        return "#FD6258";
      case "javascript":
        return "#FCD92B";
      case "media buying":
        return "#5CC1F2";
      case "node":
        return "#22E62F";
      case "react":
        return "#3D83D4";
      case "swift":
        return "#EB5D36";
      case "typescript":
        return "#2C58D4";
      case "coding book review":
        return "#7351F6";
      case "marketing book review":
        return "#F63B69";
      case "cloudflare":
        return "#F8B63C";
      case "portfolio":
        return "#A9006A";
      case "web dev":
        return "#6063a7";
      case "coding course review":
        return "#47b896";
      case "marketing course review":
        return "#df5220";
      case "css":
        return "#5d5da2";
      case "serverless":
        return "#cc3390";
      default: {
        throw new Error("You did not handle all possible blog tags.");
      }
    }
  }, [tag]);

  const formattedTag = useMemo(() => {
    return tag.split(" ").join("-");
  }, [tag]);

  const styles = {
    "--tag-background-color": renderTagColor(),
  } as React.CSSProperties;

  return (
    <Link
      href={{
        pathname: "/blog/tag",
        query: { tag: formattedTag },
      }}
      passHref={true}
    >
      <TagContainer style={styles} type="button" onClick={handleClick}>
        {tag}
      </TagContainer>
    </Link>
  );
};
