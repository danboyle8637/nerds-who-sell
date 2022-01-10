import Image from "next/image";

import { siteThemeStore } from "../../../../lib/siteThemeStore";

export const BackArrow: React.FC = () => {
  const activeTheme = siteThemeStore((state) => state.activeTheme);

  const imageUrl =
    activeTheme === "blue"
      ? "https://ik.imagekit.io/csu76xuqqlwj/nerds-who-sell/site-assets/back-arrow_ir1TXeuTkt.png"
      : activeTheme === "purple"
      ? "https://ik.imagekit.io/csu76xuqqlwj/nerds-who-sell/site-assets/blog-pagination-arrow_qVPOo-g9G.png"
      : "https://ik.imagekit.io/csu76xuqqlwj/nerds-who-sell/site-assets/back-green-arrow_g2od_9jnr.png";

  return (
    <Image
      src={imageUrl}
      width={72}
      height={100}
      alt="Arrow to go back to the next page in history"
      quality={100}
    />
  );
};
