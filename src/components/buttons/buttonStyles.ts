import { css } from "styled-components";
import { sizes } from "../../styles/sizes";

export const buttonFocus = css`
  &:focus {
    outline-color: var(--accent-2);
    outline-width: 2px;
    outline-offset: 8px;
    outline-style: dotted;
  }
`;

export const baseButtonStyles = css`
  padding: 16px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "VT323", monospace;
  font-size: 2.6rem;
  color: var(--base-button-text-color, var(--base-text-color));
  font-weight: 700;
  letter-spacing: 0.08rem;
  background-color: var(--base-button-background, var(--accent-1));
  border: none;
  border-radius: 12px;
  width: 300px;
  box-shadow: 0 2px 3px 0 hsla(0, 0%, 0%, 0.3);
  cursor: pointer;
  &:focus {
    outline-color: var(--accent-2);
    outline-width: 2px;
    outline-offset: 8px;
    outline-style: dotted;
  }
  ${sizes.aboveMobile} {
    width: 340px;
  }
`;
