import Image from "next/image";
import styled from "styled-components";

interface ImageProps {
  url: string;
  width: number;
  height: number;
  alt: string;
  title: string;
}

const ImageContainer = styled.div`
  background-color: none;
  border-radius: 12px;
  width: 100%;
  overflow: hidden;
`;

export const PostImage: React.FC<ImageProps> = ({
  url,
  width,
  height,
  alt,
  title,
}) => {
  return (
    <ImageContainer>
      <Image
        src={url}
        width={width}
        height={height}
        layout="responsive"
        alt={alt}
        title={title}
        quality={90}
      />
    </ImageContainer>
  );
};
