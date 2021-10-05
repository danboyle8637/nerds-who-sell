import Image from "next/image";
import React from "react";

interface TestImageProps {
  width: number;
  height: number;
  alt: string;
}

export const TestImage: React.FC<TestImageProps> = ({ width, height, alt }) => {
  return (
    <Image
      src="https://ik.imagekit.io/csu76xuqqlwj/nerds-who-sell/site-assets/nerds-who-rock-laptops-2_rkYrD27lNPY.png"
      width={width}
      height={height}
      layout="fixed"
      alt={alt}
    />
  );
};
