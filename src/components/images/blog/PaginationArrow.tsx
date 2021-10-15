import Image from "next/image";

export const PaginationArrow: React.FC = () => {
  return (
    <Image
      src={`https://ik.imagekit.io/csu76xuqqlwj/nerds-who-sell/site-assets/blog-pagination-arrow_qVPOo-g9G.png`}
      width={72}
      height={100}
      alt="Arrow to go up and page or back a page on the blog."
      quality={100}
    />
  );
};
