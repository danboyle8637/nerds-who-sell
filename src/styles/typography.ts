import styled, { css } from "styled-components";
import { sizes } from "./sizes";

export const largeHeadline = css`
  font-size: 5.6rem;
  color: var(--large-headline-color, var(--base-text-color));
  ${sizes.aboveMobile} {
    font-size: 6.8rem;
  }
`;

export const smallHeadline = css`
  font-size: 2.4rem;
  color: var(--small-headline-color, var(--base-text-color));
  ${sizes.aboveMobile} {
    font-size: 3.6rem;
  }
`;

export const bodyText = css`
  font-size: 1.8rem;
  color: var(--body-text-color, var(--base-text-color));
  ${sizes.aboveMobile} {
    font-size: 2rem;
  }
`;

export const anchorText = css``;
