import Head from "next/head";

interface SeoProps {
  title: string;
  description: string;
  socialSlug?: string;
  socialImage?: string;
  socialHeadline?: string;
  socialDescription?: string;
  pageType?: string;
}

export const Seo: React.FC<SeoProps> = ({
  title,
  description,
  pageType,
  socialSlug,
  socialImage,
  socialHeadline,
  socialDescription,
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="twitter:card" content={socialDescription} />
      <meta name="twitter:site" content="@nbddanny" />
      <meta name="twitter:creator" content="@nbddanny" />
      <meta property="og:type" content={pageType ? pageType : "website"} />
      <meta
        property="og:url"
        content={`https://nerdswhosell.com${socialSlug}`}
      />
      <meta property="og:image" content={socialImage} />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:title" content={socialHeadline} />
      <meta property="og:description" content={socialDescription} />
      {/* <meta property="fb:api" content="1545868855673667" /> */}
    </Head>
  );
};
