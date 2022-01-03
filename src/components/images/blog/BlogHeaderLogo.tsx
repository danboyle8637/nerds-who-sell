import Image from "next/image";

export const BlogHeaderImage = () => {
  return (
    <Image
      src="https://ik.imagekit.io/csu76xuqqlwj/nerds-who-sell/site-assets/nerds-blog-matrix-logo_ziDpc2wQi.png"
      width={705}
      height={350}
      alt="Blog article on a laptop with a pair of glasses next to it."
      title="Nerds Who Sell Blog"
      quality={100}
    />
  );
};
