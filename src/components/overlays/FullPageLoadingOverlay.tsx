import styled from "styled-components";

import { CodingLoader } from "../images/CodingLoader";
import { smallHeadline } from "../../styles/typography";
import { FadeInOutTransition } from "../../animations/transitions/FadeInOutTransition";

interface FullPageLoadingOverlayProps {
  isOpen: boolean;
}

const OverlayContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: hsla(225, 32%, 16%, 0.9);
  z-index: 10;
`;

const LoaderContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;
  gap: 20px;
  justify-items: center;
  width: max-content;
`;

const Loader = styled.div`
  width: 240px;
`;

const LoadingLabel = styled.h3`
  ${smallHeadline}
`;

export const FullPageLoadingOverlay: React.FC<FullPageLoadingOverlayProps> = ({
  isOpen,
}) => {
  return (
    <FadeInOutTransition isOpen={isOpen}>
      <OverlayContainer>
        <LoaderContainer>
          <Loader>
            <CodingLoader />
          </Loader>
          <LoadingLabel>Connecting Nerd Wires...</LoadingLabel>
        </LoaderContainer>
      </OverlayContainer>
    </FadeInOutTransition>
  );
};
