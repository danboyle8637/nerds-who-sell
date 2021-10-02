import React, { useEffect, useRef } from "react";
import styled from "styled-components";

import { QuizDrawerTransition } from "../../animations/transitions/QuizDrawerTransition";
import {
  navDrawerOpenAni,
  navDrawerClosedAni,
} from "../../animations/navigation";
import { ProjectQuizForm } from "../forms/ProjectQuizForm";
import { sizes } from "../../styles/sizes";

interface QuizOverlayProps {
  isOpen: boolean;
  toggleOverlay: () => void;
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

export const QuizOverlay: React.FC<QuizOverlayProps> = ({
  isOpen,
  toggleOverlay,
}) => {
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const nav = navRef.current;

    if (nav && isOpen) {
      navDrawerOpenAni(nav);
    }

    if (nav && !isOpen) {
      navDrawerClosedAni(nav);
    }
  }, [isOpen]);

  return (
    <QuizDrawerTransition isOpen={isOpen}>
      <BackgroundOverlay>
        <DrawerContainer ref={navRef}>
          <ProjectQuizForm />
        </DrawerContainer>
        <ClickLayer onClick={toggleOverlay} />
      </BackgroundOverlay>
    </QuizDrawerTransition>
  );
};
