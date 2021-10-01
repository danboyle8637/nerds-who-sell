import styled from "styled-components";

import { CardHeader } from "./CardHeader";
import { CardContent } from "./CardContent";
import { ServiceImage } from "../../../types/components";
import { useIsHovering } from "../../../hooks/componets/useIsHovering";
import { sizes } from "../../../styles/sizes";

interface ServiceCardProps {
  imageType: ServiceImage;
  headline: string;
  description: string;
}

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--section-background-3);
  border-radius: 12px;
  width: 350px;
  box-shadow: 0 2px 3px 0 hsla(0, 0%, 0%, 0.6), 0 8px 8px 0 hsla(0, 0%, 0%, 0.2);
  transition: transform 300ms ease-in-out;
  &:hover {
    transform: var(--card-transform);
  }
  ${sizes.aboveTablet} {
    width: 320px;
  }
  ${sizes.aboveIpadPro} {
    width: 350px;
  }
`;

export const ServiceCard: React.FC<ServiceCardProps> = ({
  imageType,
  headline,
  description,
}) => {
  const { isHovering, toggleIsHovering } = useIsHovering();

  const styles = {
    "--card-transform": isHovering ? "translateY(-6px)" : "translateY(0)",
  } as React.CSSProperties;

  return (
    <CardContainer
      style={styles}
      onMouseOver={toggleIsHovering}
      onMouseLeave={toggleIsHovering}
    >
      <CardHeader imageType={imageType} isHovering={isHovering} />
      <CardContent headline={headline} description={description} />
    </CardContainer>
  );
};
