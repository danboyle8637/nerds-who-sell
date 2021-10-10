import styled from "styled-components";

import { buttonFocus } from "./buttonStyles";

type ButtonControlType = "back" | "next";

interface InputControlButtonProps {
  controlType: ButtonControlType;
  handleClick: () => void;
}

const Button = styled.button`
  padding: 8px 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 1.4rem;
  color: var(--button-label-color);
  text-transform: uppercase;
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
}) => {
  const label = controlType === "back" ? "back" : "next";

  const styles = {
    "--button-label-color":
      controlType === "back"
        ? "var(--base-text-color)"
        : "var(--primary-background)",
    "--button-background":
      controlType === "back"
        ? "var(--secondary-background)"
        : "var(--accent-2)",
  } as React.CSSProperties;

  return (
    <Button style={styles} type="button" onClick={handleClick}>
      {label}
    </Button>
  );
};
