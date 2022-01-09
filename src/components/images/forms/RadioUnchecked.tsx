import { useMemo } from "react";
import Image from "next/image";

import { SiteTheme } from "../../../types/components";

export interface RadioIndicatorProps {
  activeTheme: SiteTheme;
}

export const RadioUnchecked: React.FC<RadioIndicatorProps> = ({
  activeTheme,
}) => {
  const imageUrl = useMemo(() => {
    switch (activeTheme) {
      case "blue": {
        return "https://ik.imagekit.io/csu76xuqqlwj/nerds-who-sell/site-assets/radio-unchecked_S_or_0eJcW_.png";
      }
      case "purple": {
        return "https://ik.imagekit.io/csu76xuqqlwj/nerds-who-sell/site-assets/radio-purple-unchecked_E_XkUjGhiT.png";
      }
      case "green": {
        return "https://ik.imagekit.io/csu76xuqqlwj/nerds-who-sell/site-assets/radio-green-unchecked_VhB_oRiiT.png";
      }
      default: {
        throw new Error(
          "You must have added another color for a radio input and you have not created the image asset for it yet."
        );
      }
    }
  }, [activeTheme]);

  return (
    <Image
      src={imageUrl}
      width={72}
      height={72}
      alt="Radio button unchecked."
      quality={100}
    />
  );
};
