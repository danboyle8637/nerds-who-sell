import Image from "next/image";

interface BlogPostImageProps {
  url: string;
  altTag: string;
  titleTag: string;
}

export const BlogPostImage: React.FC<BlogPostImageProps> = ({
  url,
  altTag,
  titleTag,
}) => {
  const currentYear = new Date().getFullYear();
  const splitUrl = url.split(String(currentYear));
  const progressive = "tr:pr-true";
  const fullUrl = [
    splitUrl[0],
    `${String(currentYear)}/${progressive}`,
    splitUrl[1],
  ].join("");

  return (
    <Image
      src={fullUrl}
      width={1200}
      height={525}
      alt={altTag}
      title={titleTag}
      layout="responsive"
      quality={100}
      priority={true}
    />
  );
};
