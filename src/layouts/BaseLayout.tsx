import { useState } from "react";
import styled from "styled-components";

import Global from "../styles/Global";
import { NavBar } from "../components/navigation/NavBar";
import { Footer } from "../components/navigation/Footer";
import { NotificationCard } from "../components/cards/NotificationCard";
import { useProjectQuizForm } from "../hooks/forms/useProjectQuizForm";
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
  const [isErrorOpen, setIsErrorOpen] = useState<boolean>(false);

  const { isQuizOverlayOpen, toggleQuizOverlay } = nerdsWhoSellStore(
    (state) => ({
      isQuizOverlayOpen: state.isQuizOverlayOpen,
      toggleQuizOverlay: state.toggleQuizOverlay,
    })
  );

  const {
    currentQuestion,
    setCurrentQuestion,
    nextQuestionId,
    primaryInterest,
    haveWebsite,
    haveTimeline,
    haveBudget,
    haveMarketingPlan,
    numberOfProducts,
    salesCopyPurpose,
    additionalDetailsValue,
    additionalDetailsOptions,
    websiteUrlValue,
    websiteUrlOptions,
    idealTimeline,
    firstName,
    firstNameOptions,
    emailAddress,
    emailAddressOptions,
    updateInputValue,
    updateInputOptions,
    setNextQuestionId,
    pastQuestionArray,
    setPastQuestionArray,
  } = useProjectQuizForm();

  const toggleNotificationCard = () => {
    setIsErrorOpen(false);
  };

  return (
    <>
      <BaseContainer>
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
          currentQuestion={currentQuestion}
          setCurrentQuestion={setCurrentQuestion}
          nextQuestionId={nextQuestionId}
          primaryInterest={primaryInterest}
          haveWebsite={haveWebsite}
          haveTimeline={haveTimeline}
          haveBudget={haveBudget}
          haveMarketingPlan={haveMarketingPlan}
          numberOfProducts={numberOfProducts}
          salesCopyPurpose={salesCopyPurpose}
          additionalDetailsValue={additionalDetailsValue}
          additionalDetailsOptions={additionalDetailsOptions}
          websiteUrlValue={websiteUrlValue}
          websiteUrlOptions={websiteUrlOptions}
          idealTimeline={idealTimeline}
          firstName={firstName}
          firstNameOptions={firstNameOptions}
          emailAddress={emailAddress}
          emailAddressOptions={emailAddressOptions}
          updateInputValue={updateInputValue}
          updateInputOptions={updateInputOptions}
          setNextQuestionId={setNextQuestionId}
          pastQuestionArray={pastQuestionArray}
          setPastQuestionArray={setPastQuestionArray}
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
