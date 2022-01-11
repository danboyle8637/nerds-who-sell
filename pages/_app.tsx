import { useEffect } from "react";
import { AppProps } from "next/app";

import { BaseLayout } from "../src/layouts/BaseLayout";
import { siteThemeStore } from "../lib/siteThemeStore";
import { SiteTheme } from "../src/types/components";

export const MyApp: React.FC<AppProps> = ({ pageProps, Component }) => {
  const updateActiveTheme = siteThemeStore((state) => state.updateActiveTheme);

  useEffect(() => {
    const currentTheme = localStorage.getItem("nerdTheme");

    if (currentTheme) {
      updateActiveTheme(currentTheme as SiteTheme);
    }
  }, []);

  return (
    <>
      <BaseLayout>
        <Component {...pageProps} />
      </BaseLayout>
    </>
  );
};

export default MyApp;
