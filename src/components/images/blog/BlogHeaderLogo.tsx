import Image from "next/image";

import { siteThemeStore } from "../../../../lib/siteThemeStore";

export const BlogHeaderImage = () => {
  const activeTheme = siteThemeStore((state) => state.activeTheme);

  return (
    <Image
      src={
        activeTheme === "blue"
          ? "https://ik.imagekit.io/csu76xuqqlwj/nerds-who-sell/site-assets/nerds-blog-logo-blue_x-Y7rJBBn.png"
          : activeTheme === "purple"
          ? "https://ik.imagekit.io/csu76xuqqlwj/nerds-who-sell/site-assets/nerds-blog-logo-purple_3fDOk7OGb.png"
          : "https://ik.imagekit.io/csu76xuqqlwj/nerds-who-sell/site-assets/nerds-blog-matrix-logo_ziDpc2wQi.png"
      }
      width={705}
      height={350}
      alt="Blog article on a laptop with a pair of glasses next to it."
      title="Nerds Who Sell Blog"
      quality={100}
    />
  );
};
