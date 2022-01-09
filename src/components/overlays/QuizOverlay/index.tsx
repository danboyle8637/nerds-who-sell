import React, { useEffect, useRef } from "react";
import styled from "styled-components";

import { QuizDrawerTransition } from "../../../animations/transitions/QuizDrawerTransition";
import {
  navDrawerOpenAni,
  navDrawerClosedAni,
} from "../../../animations/navigation";
import { quizCloseButtonEnterAni } from "../../../animations/buttons";
import { ProjectQuizForm } from "../../forms/ProjectQuizForm";
import { ProgressThemeIndicator } from "./ProgressThemeIndicator";
import { CloseIcon } from "../../images/CloseIcon";
import { useProjectQuizForm } from "../../../hooks/forms/useProjectQuizForm";
import { siteThemeStore } from "../../../../lib/siteThemeStore";
import { buttonFocus } from "../../buttons/buttonStyles";
import {
  blueQuizTheme,
  purpleQuizTheme,
  greenQuizTheme,
} from "../../../styles/colors";
import {
  QuizRadioInputValue,
  QuizeTextInputOptions,
  QuizTextInputValue,
} from "../../../hooks/forms/useProjectQuizForm";
import { sizes } from "../../../styles/sizes";

interface QuizOverlayProps {
  isOpen: boolean;
  toggleOverlay: () => void;
  toggleNotificationCard: () => void;
}

const BackgroundOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
  background: hsla(0, 100%, 100%, 0.01);
  backdrop-filter: blur(6px);
`;

const ClickLayer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const DrawerContainer = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 80px;
  background-image: linear-gradient(to bottom, #1a1a1a, #000 60%);
  outline: none;
  overflow: hidden;
  box-shadow: 0 0 0 8px #000, -12px 0 42px 2px hsla(0, 0%, 0%, 0.6);
  z-index: 995;
  transform: translateX(108%);
  &:focus {
    box-shadow: 0 0 0 8px var(--accent-2);
  }
  ${sizes.aboveMobile} {
    left: unset;
    width: 440px;
  }
`;

const Close = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  background: none;
  border: none;
  width: 38px;
  cursor: pointer;
  ${buttonFocus}
`;

const ProgressContainer = styled.div`
  position: absolute;
  bottom: 12px;
  left: 50%;
  width: fit-content;
  transform: translateX(-50%);
`;

export const QuizOverlay: React.FC<QuizOverlayProps> = ({
  isOpen,
  toggleOverlay,
  toggleNotificationCard,
}) => {
  const navRef = useRef<HTMLDivElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  const activeTheme = siteThemeStore((state) => state.activeTheme);

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

  useEffect(() => {
    const nav = navRef.current;
    const closeButton = closeButtonRef.current;

    if (nav && closeButton && isOpen) {
      navDrawerOpenAni(nav);
      quizCloseButtonEnterAni(closeButton);
    }

    if (nav && !isOpen) {
      navDrawerClosedAni(nav);
    }
  }, [isOpen]);

  const styles =
    activeTheme === "blue"
      ? blueQuizTheme
      : activeTheme === "purple"
      ? purpleQuizTheme
      : greenQuizTheme;

  return (
    <QuizDrawerTransition isOpen={isOpen}>
      <BackgroundOverlay>
        <DrawerContainer ref={navRef} style={styles}>
          <ProjectQuizForm
            setCurrentQuestion={setCurrentQuestion}
            nextQuestionId={nextQuestionId}
            pastQuestionArray={pastQuestionArray}
            setPastQuestionArray={setPastQuestionArray}
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
            toggleNotificationCard={toggleNotificationCard}
          />
          <Close
            ref={closeButtonRef}
            type="button"
            aria-label="Close quiz overlay"
            onClick={toggleOverlay}
          >
            <CloseIcon />
          </Close>
          <ProgressContainer>
            <ProgressThemeIndicator
              currentQuestion={currentQuestion}
              nextQuestion={nextQuestionId}
            />
          </ProgressContainer>
        </DrawerContainer>
        <ClickLayer onClick={toggleOverlay} />
      </BackgroundOverlay>
    </QuizDrawerTransition>
  );
};
