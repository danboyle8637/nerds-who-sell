import Image from "next/image";

import { useMatchMedia } from "../../../hooks/componets/useMatchMedia";

export const MatrixCat = () => {
  const isAboveMobile = useMatchMedia();

  return (
    <Image
      src={
        isAboveMobile
          ? "https://ik.imagekit.io/csu76xuqqlwj/nerds-who-sell/site-assets/matrix-cat-above-mobile_t724svXCy.png"
          : "https://ik.imagekit.io/csu76xuqqlwj/nerds-who-sell/site-assets/matrix-cat-mobile_2nyBb1CXq.png"
      }
      width={96}
      height={96}
      alt="Deja vu matrix cat"
      title="Meeeeoooow"
      quality={100}
    />
  );
};
