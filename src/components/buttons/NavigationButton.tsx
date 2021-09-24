import Link from "next/link";
import styled from "styled-components";

import { baseButtonStyles } from "./buttonStyles";

interface NavigationButtonProps {
  slug: string;
}

const Button = styled.a`
  ${baseButtonStyles}
  text-decoration: none;
`;

export const NavigationButton: React.FC<NavigationButtonProps> = ({
  slug,
  children,
}) => {
  return (
    <Link href={slug} passHref={true}>
      <Button>{children}</Button>
    </Link>
  );
};
