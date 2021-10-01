import styled from "styled-components";

import { RenderCardImage } from "./RenderCardImage";
import { ServiceImage } from "../../../types/components";

interface CardHeaderProps {
  imageType: ServiceImage;
  isHovering: boolean;
}

const HeaderContainer = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  background-color: var(--section-background-4);
  border-radius: 12px 12px 0 0;
  width: 100%;
  height: 150px;
  pointer-events: none;
`;

const ImageContainer = styled.div`
  transition: transform 300ms ease-in-out;
  transform: var(--image-transform);
`;

export const CardHeader: React.FC<CardHeaderProps> = ({
  imageType,
  isHovering,
}) => {
  const styles = {
    "--image-transform": isHovering
      ? "translateY(-6px) scale(1.02)"
      : "translateY(0) scale(1)",
  } as React.CSSProperties;

  return (
    <HeaderContainer>
      <ImageContainer style={styles}>
        <RenderCardImage imageType={imageType} />
      </ImageContainer>
    </HeaderContainer>
  );
};
