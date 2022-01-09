import { useMemo } from "react";
import Image from "next/image";

import { SiteTheme } from "../../../types/components";

export interface RadioIndicatorProps {
  activeTheme: SiteTheme;
}

export const RadioChecked: React.FC<RadioIndicatorProps> = ({
  activeTheme,
}) => {
  const imageUrl = useMemo(() => {
    switch (activeTheme) {
      case "blue": {
        return "https://ik.imagekit.io/csu76xuqqlwj/nerds-who-sell/site-assets/radio-checked_2Tddc6bZEK.png";
      }
      case "purple": {
        return "https://ik.imagekit.io/csu76xuqqlwj/nerds-who-sell/site-assets/radio-purple-checked_0Rd09LHTVyv.png";
      }
      case "green": {
        return "https://ik.imagekit.io/csu76xuqqlwj/nerds-who-sell/site-assets/radio-green-checked_ykf1joXDu.png";
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
      alt="Radio button checked."
      quality={100}
    />
  );
};
