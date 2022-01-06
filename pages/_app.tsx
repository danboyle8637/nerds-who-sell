import { useEffect } from "react";
import { AppProps } from "next/app";

import { BaseLayout } from "../src/layouts/BaseLayout";

export const MyApp: React.FC<AppProps> = ({ pageProps, Component }) => {
  useEffect(() => {
    // Look in local storage and see if there is a value
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
