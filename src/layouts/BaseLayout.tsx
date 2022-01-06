import { useState, CSSProperties } from "react";
import styled from "styled-components";

import Global from "../styles/Global";
import { NavBar } from "../components/navigation/NavBar";
import { Footer } from "../components/navigation/Footer";
import { NotificationCard } from "../components/cards/NotificationCard";
import { QuizOverlay } from "../components/overlays/QuizOverlay";
import { Portal } from "../components/shared/Portal";
import { blueTheme, purpleTheme, greenTheme } from "../styles/colors";
import { nerdsWhoSellStore } from "../../lib/store";
import { siteThemeStore } from "../../lib/siteThemeStore";

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
  const [isErrorOpen, setIsErrorOpen] = useState<boolean>(false);

  const activeTheme = siteThemeStore((state) => state.activeTheme);
  const { isQuizOverlayOpen, toggleQuizOverlay } = nerdsWhoSellStore(
    (state) => ({
      isQuizOverlayOpen: state.isQuizOverlayOpen,
      toggleQuizOverlay: state.toggleQuizOverlay,
    })
  );

  const toggleNotificationCard = () => {
    setIsErrorOpen(false);
  };

  const themeStyles =
    activeTheme === "blue"
      ? blueTheme
      : activeTheme === "purple"
      ? purpleTheme
      : greenTheme;

  return (
    <>
      <BaseContainer style={themeStyles}>
        <Global />
        <NavBar />
        <ContentContainer>{children}</ContentContainer>
        <Footer />
      </BaseContainer>
      <Portal>
        <QuizOverlay
          isOpen={isQuizOverlayOpen}
          toggleOverlay={toggleQuizOverlay}
          toggleNotificationCard={toggleNotificationCard}
        />
        <NotificationCard
          isActive={isErrorOpen}
          type="danger"
          message="Oh no. Something went wrong with the telemetry of the internet as we know it. Refresh the page and try again."
          handleCloseNotification={toggleNotificationCard}
        />
      </Portal>
    </>
  );
};
