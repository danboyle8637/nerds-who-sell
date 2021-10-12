import Image from "next/image";
import styled from "styled-components";

interface ImageProps {
  url: string;
  imageWidth: number;
  imageHeight: number;
  containerWidth: number;
  alt: string;
  title: string;
}

const ImageContainer = styled.div`
  background-color: none;
  border-radius: 12px;
  width: var(--container-width, 100%);
  max-width: 1000px;
  overflow: hidden;
`;

export const PostImage: React.FC<ImageProps> = ({
  url,
  imageWidth,
  imageHeight,
  containerWidth,
  alt,
  title,
}) => {
  return (
    <ImageContainer>
      <Image
        src={url}
        width={imageWidth}
        height={imageHeight}
        layout="responsive"
        alt={alt}
        title={title}
        quality={90}
      />
    </ImageContainer>
  );
};
