import { CSSProperties } from "react";

export const greenTheme = {
  "--accent-2": "hsl(120, 100%, 50%)",
  "--service-card-header-color": "hsl(0, 0%, 9%)",
  "--service-card-body-color": "hsl(0, 0%, 13%)",
  "--service-card-headline": "var(--accent-2)",
} as CSSProperties;

export const blueTheme = {
  "--accent-2": "hsl(176, 92%, 53%)",
  "--service-card-header-color": "hsl(226, 32%, 8%)",
  "--service-card-body-color": "hsl(226, 32%, 14%)",
  "--service-card-headline": "var(--accent-2)",
} as CSSProperties;

export const purpleTheme = {
  "--accent-2": "hsl(246, 59%, 62%)",
  "--service-card-header-color": "var(--section-background-4)",
  "--service-card-body-color": "var(--section-background-3)",
  "--service-card-headline": "var(--base-text-color)",
} as CSSProperties;
