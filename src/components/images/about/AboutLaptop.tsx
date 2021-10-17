import Image from "next/image";

export const AboutLaptop = () => {
  return (
    <Image
      src="https://ik.imagekit.io/csu76xuqqlwj/nerds-who-sell/site-assets/about-dan-1440x700_VM4TgLj1K.jpg"
      width={1440}
      height={700}
      alt="Dan smiling and looking nerdy."
      title="Nerds Who Sell"
      quality={100}
      priority={true}
    />
  );
};
