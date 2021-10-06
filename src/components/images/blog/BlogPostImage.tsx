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
  const splitUrl = url.split("2021");
  const blurred = "tr:w-10,bl-2";
  const progressive = "tr:pr-true";
  const fullUrl = [splitUrl[0], `2021/${progressive}`, splitUrl[1]].join("");
  return (
    <Image
      src={fullUrl}
      width={800}
      height={320}
      alt={altTag}
      title={titleTag}
      layout="responsive"
      quality={90}
    />
  );
};
