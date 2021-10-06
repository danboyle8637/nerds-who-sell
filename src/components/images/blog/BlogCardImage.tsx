import Image from "next/image";

interface BlogCardImageProps {
  url: string;
  altTag: string;
  titleTag: string;
}

export const BlogCardImage: React.FC<BlogCardImageProps> = ({
  url,
  altTag,
  titleTag,
}) => {
  return (
    <Image
      src={`${url}?tr=w-600,h-240,fo-auto`}
      width={800}
      height={320}
      alt={altTag}
      title={titleTag}
      quality={100}
    />
  );
};
