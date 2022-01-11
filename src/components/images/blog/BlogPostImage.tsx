import Image from "next/image";

interface BlogPostImageProps {
  date: string;
  url: string;
  altTag: string;
  titleTag: string;
}

export const BlogPostImage: React.FC<BlogPostImageProps> = ({
  date,
  url,
  altTag,
  titleTag,
}) => {
  const dateArray = date.split("/");
  const publishedYear = `20${dateArray[dateArray.length - 1]}`;
  const splitUrl = url.split(publishedYear);
  const progressive = "tr:pr-true";
  const fullUrl = [
    splitUrl[0],
    `${publishedYear}/${progressive}`,
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
