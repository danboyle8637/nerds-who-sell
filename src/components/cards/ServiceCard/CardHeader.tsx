import { useEffect, useRef } from "react";
import styled from "styled-components";

import { RenderCardImage } from "./RenderCardImage";
import {
  serviceCardImageShadowHover,
  serviceCardImageShadowNotHover,
} from "../../../animations/images";
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
  background-color: var(--service-card-header-color);
  border-radius: 12px 12px 0 0;
  width: 100%;
  height: 150px;
  pointer-events: none;
  transition: background-color 500ms ease-in-out;
`;

const ImageContainer = styled.div`
  position: relative;
  transition: transform 300ms ease-in-out;
  transform: var(--image-transform);
  isolation: isolate;
`;

const ImageShadow = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  background-color: hsla(0, 0%, 0%, 0.4);
  border-radius: 50%;
  width: 200px;
  height: 100px;
  filter: blur(12px);
  transform: translate(-50%, 30px);
  z-index: -1;
`;

export const CardHeader: React.FC<CardHeaderProps> = ({
  imageType,
  isHovering,
}) => {
  const shadowRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const shadow = shadowRef.current;

    if (shadow && isHovering) {
      serviceCardImageShadowHover(shadow);
    }

    if (shadow && !isHovering) {
      serviceCardImageShadowNotHover(shadow);
    }
  }, [isHovering]);

  const styles = {
    "--image-transform": isHovering
      ? "translateY(-6px) scale(1.02)"
      : "translateY(0) scale(1)",
  } as React.CSSProperties;

  return (
    <HeaderContainer>
      <ImageContainer style={styles}>
        <RenderCardImage imageType={imageType} />
        <ImageShadow ref={shadowRef} />
      </ImageContainer>
    </HeaderContainer>
  );
};
