import create, { SetState } from "zustand";

import { SiteTheme } from "../src/types/components";

type SiteThemeState = {
  activeTheme: SiteTheme;
  updateActiveTheme: (theme: SiteTheme) => void;
};

export const siteThemeStore = create<SiteThemeState>(
  (set: SetState<SiteThemeState>) => ({
    activeTheme: "blue",
    updateActiveTheme: (theme) =>
      set((state) => ({
        ...state,
        activeTheme: theme,
      })),
  })
);
