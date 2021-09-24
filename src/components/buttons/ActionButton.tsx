import styled from "styled-components";

import { baseButtonStyles } from "./buttonStyles";

interface ActionButtonProps {
  handleClick: () => void;
}

const Button = styled.button`
  ${baseButtonStyles}
`;

export const ActionButton: React.FC<ActionButtonProps> = ({
  handleClick,
  children,
}) => {
  return (
    <Button type="button" onClick={handleClick}>
      {children}
    </Button>
  );
};
