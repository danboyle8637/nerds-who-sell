import styled from "styled-components";

import Global from "../styles/Global";
import { MenuDrawer } from "../components/overlays/MenuDrawer";
import { Footer } from "../components/navigation/Footer";
import { QuizOverlay } from "../components/overlays/QuizOverlay";
import { Portal } from "../components/shared/Portal";
import { nerdsWhoSellStore } from "../../lib/store";

const BaseContainer = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  overflow: hidden;
`;

export const BaseLayout: React.FC = ({ children }) => {
  const { isQuizOverlayOpen, toggleQuizOverlay } = nerdsWhoSellStore(
    (state) => ({
      isQuizOverlayOpen: state.isQuizOverlayOpen,
      toggleQuizOverlay: state.toggleQuizOverlay,
    })
  );

  return (
    <>
      <BaseContainer>
        <Global />
        <ContentContainer>{children}</ContentContainer>
        <Footer />
      </BaseContainer>
      <Portal>
        <QuizOverlay
          isOpen={isQuizOverlayOpen}
          toggleOverlay={toggleQuizOverlay}
        />
      </Portal>
    </>
  );
};
