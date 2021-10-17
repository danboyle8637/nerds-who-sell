import Image from "next/image";

export const AboutMobile = () => {
  return (
    <Image
      src="https://ik.imagekit.io/csu76xuqqlwj/nerds-who-sell/site-assets/about-dan-600x700_cYYMaJJvL.jpg"
      width={400}
      height={700}
      alt="Dan smiling and looking nerdy."
      title="Nerds Who Sell"
      quality={100}
      priority={true}
    />
  );
};
