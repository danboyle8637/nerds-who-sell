import { AppProps } from "next/app";

import Layout from "../src/Layouts/BaseLayout";

export const MyApp: React.FC<AppProps> = ({ pageProps, Component }) => {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default MyApp;
