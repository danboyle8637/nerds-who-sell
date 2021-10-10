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
`;

export const FormButton: React.FC<FormButtonProps> = ({
  isDisabled,
  children,
}) => {
  console.log(isDisabled);

  const styles = {
    "--base-button-text-color": isDisabled
      ? "var(--base-text-color)"
      : "var(--primary-background)",
    "--base-button-background": isDisabled
      ? "hsla(176, 92%, 53%, 0.2)"
      : "var(--accent-2)",
    "--cursor": isDisabled ? "not-allowed" : "pointer",
  } as CSSProperties;

  return (
    <Button style={styles} type="submit" disabled={isDisabled}>
      {children}
    </Button>
  );
};
