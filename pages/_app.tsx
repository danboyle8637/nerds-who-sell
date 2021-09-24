import { AppProps } from "next/app";

import { BaseLayout } from "../src/layouts/BaseLayout";

export const MyApp: React.FC<AppProps> = ({ pageProps, Component }) => {
  return (
    <>
      <BaseLayout>
        <Component {...pageProps} />
      </BaseLayout>
    </>
  );
};

export default MyApp;
