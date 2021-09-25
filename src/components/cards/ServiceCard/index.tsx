import styled from "styled-components";

import { CardHeader } from "./CardHeader";
import { CardContent } from "./CardContent";
import { ServiceImage } from "../../../types/components";

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
`;

export const ServiceCard: React.FC<ServiceCardProps> = ({
  imageType,
  headline,
  description,
}) => {
  return (
    <CardContainer>
      <CardHeader imageType={imageType} />
      <CardContent headline={headline} description={description} />
    </CardContainer>
  );
};
