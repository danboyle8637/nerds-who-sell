import { CSSProperties } from "react";

export const greenTheme = {
  "--accent-2": "hsl(120, 100%, 50%)",
  "--action-button-label-color": "hsl(0, 0%, 9%)",
  "--action-button-shadow": "hsl(129, 100%, 92%)",
  "--service-card-header-color": "hsl(0, 0%, 9%)",
  "--service-card-body-color": "hsl(0, 0%, 13%)",
  "--service-card-headline": "var(--accent-2)",
  "--strong-paragraph-color": "hsl(120, 100%, 50%)",
  "--pre-headline-color": "var(--accent-2)",
  "--back-button-bg": "hsl(0, 0%, 9%)",
  "--back-button-label": "hsl(129, 100%, 92%)",
} as CSSProperties;

export const blueTheme = {
  "--accent-2": "hsl(176, 92%, 53%)",
  "--action-button-label-color": "hsl(176, 92%, 6%)",
  "--action-button-shadow": "hsl(246, 59%, 62%)",
  "--service-card-header-color": "hsl(226, 32%, 8%)",
  "--service-card-body-color": "hsl(226, 32%, 14%)",
  "--service-card-headline": "var(--accent-2)",
  "--strong-paragraph-color": "hsl(259, 78%, 70%)",
  "--pre-headline-color": "hsl(246, 59%, 62%)",
  "--back-button-bg": "hsl(246, 59%, 62%)",
  "--back-button-label": "var(--base-text-color)",
} as CSSProperties;

export const purpleTheme = {
  "--accent-2": "hsl(246, 59%, 62%)",
  "--action-button-label-color": "var(--base-text-color)",
  "--action-button-shadow": "hsl(176, 92%, 53%)",
  "--service-card-header-color": "var(--section-background-4)",
  "--service-card-body-color": "var(--section-background-3)",
  "--service-card-headline": "var(--base-text-color)",
  "--strong-paragraph-color": "hsl(176, 92%, 53%)",
  "--pre-headline-color": "hsl(176, 92%, 53%)",
  "--back-button-bg": "hsl(176, 92%, 53%)",
  "--back-button-label": "hsl(176, 92%, 6%)",
} as CSSProperties;

export const greenQuizTheme = {
  "--accent-2": "hsl(120, 100%, 50%)",
  "--action-button-label-color": "hsl(0, 0%, 9%)",
  "--action-button-shadow": "hsl(129, 100%, 92%)",
  "--quiz-form-valid-label-color": "hsl(0, 0%, 9%)",
  "--quiz-form-not-valid-bg-color": "hsla(120, 100%, 50%, 0.1)",
} as CSSProperties;

export const blueQuizTheme = {
  "--accent-2": "hsl(176, 92%, 53%)",
  "--action-button-label-color": "hsl(176, 92%, 6%)",
  "--action-button-shadow": "hsl(246, 59%, 62%)",
  "--quiz-form-valid-label-color": "hsl(176, 92%, 6%)",
  "--quiz-form-not-valid-bg-color": "hsla(176, 92%, 53%, 0.1)",
} as CSSProperties;

export const purpleQuizTheme = {
  "--accent-2": "hsl(246, 59%, 62%)",
  "--action-button-label-color": "var(--base-text-color)",
  "--action-button-shadow": "hsl(176, 92%, 53%)",
  "--quiz-form-valid-label-color": "var(--base-text-color)",
  "--quiz-form-not-valid-bg-color": "hsla(246, 59%, 62%, 0.1)",
} as CSSProperties;
