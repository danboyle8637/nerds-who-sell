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

const ImageSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const ImageContainer = styled.div`
  background-color: var(--section-background-5);
  border-radius: 12px;
  width: var(--container-width, 100%);
  max-width: 800px;
  overflow: hidden;
  line-height: 0;
`;

const Spacer = styled.div`
  width: 100%;
  height: 40px;
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
    <ImageSection>
      <ImageContainer>
        <Image
          src={url}
          width={imageWidth}
          height={imageHeight}
          layout="intrinsic"
          alt={alt}
          title={title}
          quality={90}
        />
      </ImageContainer>
      <Spacer />
    </ImageSection>
  );
};
