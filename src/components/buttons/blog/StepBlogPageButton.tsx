import Link from "next/link";
import styled from "styled-components";

import { PaginationArrow } from "../../images/blog/PaginationArrow";
import { Direction, LEFT } from "../../../hooks/componets/usePagination";
import { buttonFocus } from "../buttonStyles";

interface StepBlogPageProps {
  direction: Direction;
  activePage: number;
  handleStepPageNumber: (direction: Direction) => void;
}

const Button = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: RobotoBold, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 1.3rem;
  font-weight: 800;
  color: var(--base-text-color);
  text-transform: uppercase;
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

const Arrow = styled.div`
  width: 18px;
  transform: var(--transform-arrow);
`;

export const StepBlogPageButton: React.FC<StepBlogPageProps> = ({
  direction,
  activePage,
  handleStepPageNumber,
}) => {
  const turnDirection = direction === LEFT ? activePage-- : activePage++;

  const styles = {
    "--button-background": "hsla(246, 59%, 62%, 0.2)",
    "--transform-arrow": direction === LEFT ? "rotate(0)" : "rotate(200grad)",
  } as React.CSSProperties;

  return (
    <Link href={`/blog/${turnDirection}`} passHref={true}>
      <Button style={styles} onClick={() => handleStepPageNumber(direction)}>
        {direction === LEFT ? (
          <>
            <Arrow>
              <PaginationArrow />
            </Arrow>
            prev
          </>
        ) : (
          <>
            next
            <Arrow>
              <PaginationArrow />
            </Arrow>
          </>
        )}
      </Button>
    </Link>
  );
};
