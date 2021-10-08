import styled from "styled-components";

import Global from "../styles/Global";
import { NavBar } from "../components/navigation/NavBar";
import { Footer } from "../components/navigation/Footer";
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
  const { isQuizOverlayOpen, toggleQuizOverlay } = nerdsWhoSellStore(
    (state) => ({
      isQuizOverlayOpen: state.isQuizOverlayOpen,
      toggleQuizOverlay: state.toggleQuizOverlay,
    })
  );

  const {
    nextQuestionId,
    prevQuestionId,
    primaryInterest,
    haveWebsite,
    haveTimeline,
    haveBudget,
    haveImages,
    haveMarketingPlan,
    numberOfProducts,
    salesCopyPurpose,
    additionalDetailsValue,
    additionalDetailsOptions,
    websiteUrlValue,
    websiteUrlOptions,
    idealTimeline,
    updateInputValue,
    updateInputOptions,
    setNextQuestionId,
  } = useProjectQuizForm();

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
          nextQuestionId={nextQuestionId}
          prevQuestionId={prevQuestionId}
          primaryInterest={primaryInterest}
          haveWebsite={haveWebsite}
          haveTimeline={haveTimeline}
          haveBudget={haveBudget}
          haveImages={haveImages}
          haveMarketingPlan={haveMarketingPlan}
          numberOfProducts={numberOfProducts}
          salesCopyPurpose={salesCopyPurpose}
          additionalDetailsValue={additionalDetailsValue}
          additionalDetailsOptions={additionalDetailsOptions}
          websiteUrlValue={websiteUrlValue}
          websiteUrlOptions={websiteUrlOptions}
          idealTimeline={idealTimeline}
          updateInputValue={updateInputValue}
          updateInputOptions={updateInputOptions}
          setNextQuestionId={setNextQuestionId}
        />
      </Portal>
    </>
  );
};
