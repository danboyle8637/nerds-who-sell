import Image from "next/image";

export const AboutTablet = () => {
  return (
    <Image
      src="https://ik.imagekit.io/csu76xuqqlwj/nerds-who-sell/site-assets/about-dan-1200x800_xERHtItg5D.jpg"
      width={1200}
      height={800}
      alt="Dan smiling and looking nerdy."
      title="Nerds Who Sell"
      quality={100}
      priority={true}
    />
  );
};
