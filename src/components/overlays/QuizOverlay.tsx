import React, { useEffect, useRef } from "react";
import styled from "styled-components";

import { QuizDrawerTransition } from "../../animations/transitions/QuizDrawerTransition";
import {
  navDrawerOpenAni,
  navDrawerClosedAni,
} from "../../animations/navigation";
import { quizCloseButtonEnterAni } from "../../animations/buttons";
import { ProjectQuizForm } from "../forms/ProjectQuizForm";
import { CloseIcon } from "../images/CloseIcon";
import { buttonFocus } from "../buttons/buttonStyles";
import {
  QuizRadioInputValue,
  QuizeTextInputOptions,
  QuizTextInputValue,
} from "../../hooks/forms/useProjectQuizForm";
import { sizes } from "../../styles/sizes";

interface QuizOverlayProps {
  isOpen: boolean;
  toggleOverlay: () => void;
  nextQuestionId: number;
  prevQuestionId: number;
  primaryInterest: QuizRadioInputValue;
  haveWebsite: QuizRadioInputValue;
  haveTimeline: QuizRadioInputValue;
  haveBudget: QuizRadioInputValue;
  haveImages: QuizRadioInputValue;
  haveMarketingPlan: QuizRadioInputValue;
  numberOfProducts: QuizRadioInputValue;
  salesCopyPurpose: QuizRadioInputValue;
  additionalDetailsValue: QuizTextInputValue;
  additionalDetailsOptions: QuizeTextInputOptions;
  websiteUrlValue: QuizTextInputValue;
  websiteUrlOptions: QuizeTextInputOptions;
  idealTimeline: QuizRadioInputValue;
  updateInputValue: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  updateInputOptions: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  setNextQuestionId: React.Dispatch<React.SetStateAction<number>>;
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
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;
  gap: 6px;
  justify-items: center;
  align-items: stretch;
  background-color: var(--section-background-4);
  outline: none;
  overflow: hidden;
  box-shadow: 0 0 0 8px var(--section-background-4),
    -12px 0 42px 2px hsla(0, 0%, 0%, 0.6);
  z-index: 995;
  transform: translateX(108%);
  &:focus {
    box-shadow: 0 0 0 8px var(--accent-2);
  }
  ${sizes.aboveIphone11Pro} {
    gap: 12px;
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

export const QuizOverlay: React.FC<QuizOverlayProps> = ({
  isOpen,
  toggleOverlay,
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
}) => {
  const navRef = useRef<HTMLDivElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

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

  return (
    <QuizDrawerTransition isOpen={isOpen}>
      <BackgroundOverlay>
        <DrawerContainer ref={navRef}>
          <ProjectQuizForm
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
          <Close
            ref={closeButtonRef}
            type="button"
            aria-label="Close quiz overlay"
            onClick={toggleOverlay}
          >
            <CloseIcon />
          </Close>
        </DrawerContainer>
        <ClickLayer onClick={toggleOverlay} />
      </BackgroundOverlay>
    </QuizDrawerTransition>
  );
};
