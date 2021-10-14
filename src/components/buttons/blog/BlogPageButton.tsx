import Link from "next/link";
import styled from "styled-components";

import { buttonFocus } from "../buttonStyles";

interface BlogPageButtonProps {
  pageNumber: number;
  currentPage: number;
  handleUpdateBlogPage: (page: number) => void;
}

const Button = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: RobotoBold, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--button-label-color);
  text-decoration: none;
  background-color: var(--button-background);
  border: none;
  width: 38px;
  height: 38px;
  cursor: pointer;
  ${buttonFocus}
  &:hover {
  }
`;

export const BlogPageButton: React.FC<BlogPageButtonProps> = ({
  pageNumber,
  currentPage,
  handleUpdateBlogPage,
}) => {
  const styles = {
    "--button-label-color":
      pageNumber === currentPage
        ? "var(primary-background)"
        : "var(--base-text-color)",
    "--button-background":
      pageNumber === currentPage
        ? "hsl(176, 92%, 53%)"
        : "hsla(176, 92%, 53%, 0.2)",
  } as React.CSSProperties;

  const slug = pageNumber === 1 ? "/blog" : `blog/${pageNumber}`;

  return (
    <Link href={slug} passHref={true}>
      <Button style={styles} onClick={() => handleUpdateBlogPage(pageNumber)}>
        {pageNumber}
      </Button>
    </Link>
  );
};
