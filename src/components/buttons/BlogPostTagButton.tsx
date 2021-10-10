import { useCallback } from "react";
import styled from "styled-components";

import { BlogTag } from "../../types/blog";

interface BlogPostTagChipProps {
  tag: BlogTag;
  handleClick: () => void;
}

const TagContainer = styled.button`
  padding: 0 12px;
  display: flex;
  justify-content: center;
  align-items: center;
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

const TagLabel = styled.p`
  font-size: 1.6rem;
  font-weight: 700;
  color: var(--base-text-color);
  text-transform: uppercase;
  letter-spacing: 0.1rem;
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
      case "durable objects":
        return "#FFD955";
      case "email copy":
        return "#65C76F";
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
      case "opinion":
        return "#F63B69";
      case "react":
        return "#3D83D4";
      case "swift":
        return "#EB5D36";
      case "typescript":
        return "#2C58D4";
      case "book review":
        return "#7351F6";
      case "cloudflare workers":
        return "#F8B63C";
      case "portfolio":
        return "#A9006A";
      default: {
        throw new Error("You did not handle all possible blog tags.");
      }
    }
  }, [tag]);

  const styles = {
    "--tag-background-color": renderTagColor(),
  } as React.CSSProperties;

  return (
    <TagContainer style={styles} type="button" onClick={handleClick}>
      <TagLabel>{tag}</TagLabel>
    </TagContainer>
  );
};
