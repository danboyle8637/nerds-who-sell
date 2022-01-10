import { CSSProperties } from "react";
import styled from "styled-components";

import { baseButtonStyles } from "./buttonStyles";

interface FormButtonProps {
  isDisabled: boolean;
}

const Button = styled.button`
  justify-self: center;
  ${baseButtonStyles}
  cursor: var(--cursor);
  transition: box-shadow 300ms ease-in-out;
  &:hover {
    box-shadow: 0 4px 4px 0px hsla(0, 0%, 0%, 0.6),
      0 0 0 6px var(--action-button-shadow);
  }
  &:focus:not(:focus-visible) {
    outline: none;
  }
`;

export const FormButton: React.FC<FormButtonProps> = ({
  isDisabled,
  children,
}) => {
  const styles = {
    "--action-button-label-color": isDisabled
      ? "var(--base-text-color)"
      : "var(--primary-background)",
    "--base-button-background": isDisabled
      ? "var(--quiz-form-not-valid-bg-color)"
      : "var(--accent-2)",
    "--cursor": isDisabled ? "not-allowed" : "pointer",
  } as CSSProperties;

  return (
    <Button style={styles} type="submit" disabled={isDisabled}>
      {children}
    </Button>
  );
};
