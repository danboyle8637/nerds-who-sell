import styled from "styled-components";

import { RenderCardImage } from "./RenderCardImage";
import { ServiceImage } from "../../../types/components";

interface CardHeaderProps {
  imageType: ServiceImage;
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
`;

export const CardHeader: React.FC<CardHeaderProps> = ({ imageType }) => {
  return (
    <HeaderContainer>
      <RenderCardImage imageType={imageType} />
    </HeaderContainer>
  );
};
