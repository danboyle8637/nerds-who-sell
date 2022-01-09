import styled from "styled-components";

import { buttonFocus } from "./buttonStyles";

type ButtonControlType = "back" | "next";

interface InputControlButtonProps {
  controlType: ButtonControlType;
  handleClick: () => void;
  isValid: boolean;
}

const Button = styled.button`
  padding: 8px 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "VT323", monospace;
  font-size: 2rem;
  color: var(--button-label-color);
  letter-spacing: 0.08rem;
  background-color: var(--button-background);
  border: none;
  border-radius: 6px;
  outline: none;
  width: 100px;
  height: 32px;
  box-shadow: 0 4px 4px 0 hsla(0, 0%, 0%, 0.25);
  cursor: pointer;
  ${buttonFocus}
`;

export const InputControlButton: React.FC<InputControlButtonProps> = ({
  controlType,
  handleClick,
  isValid,
}) => {
  const label = controlType === "back" ? "back" : "next";

  const styles = {
    "--button-label-color":
      controlType === "back"
        ? "var(--base-text-color)"
        : isValid
        ? "var(--quiz-form-valid-label-color)"
        : "hsla(0, 0%, 0%, 0.2)",
    "--button-background":
      controlType === "back"
        ? "var(--secondary-background)"
        : isValid
        ? "var(--accent-2)"
        : "var(--quiz-form-not-valid-bg-color)",
  } as React.CSSProperties;

  return (
    <Button style={styles} type="button" onClick={handleClick}>
      {label}
    </Button>
  );
};
