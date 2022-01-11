import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

import { quizProgressAni } from "../../../animations/forms";
import { blueTheme, purpleTheme, greenTheme } from "../../../styles/colors";
import { siteThemeStore } from "../../../../lib/siteThemeStore";
import { sizes } from "../../../styles/sizes";

interface ProgressBarProps {
  currentQuestion: number;
  nextQuestionId: number;
}

const ProgressBarContainer = styled.div`
  padding: 0 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--primary-background);
  border-radius: 90px;
  width: 260px;
  height: 50px;
`;

const ProgressTrack = styled.div`
  padding: 4px 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--section-background-5);
  border-radius: 50px;
  width: 100%;
  height: 12px;
  box-shadow: inset 0 0 6px 0 hsla(0, 0%, 0%, 0.3);
  overflow: hidden;
`;

const ProgressContainer = styled.div`
  background: none;
  width: 100%;
  height: 100%;
  border-radius: 100px;
  overflow: hidden;
`;

const Progress = styled.div`
  background-color: var(--accent-2);
  border-radius: 50px;
  width: 100%;
  height: 100%;
  /* transform: translateX(-100%); */
`;

export const ProgressBar: React.FC<ProgressBarProps> = ({
  currentQuestion,
  nextQuestionId,
}) => {
  const [totalQuestions, setTotalQuestions] = useState<number>(10);

  const progressBarRef = useRef<HTMLDivElement | null>(null);

  const activeTheme = siteThemeStore((state) => state.activeTheme);

  useEffect(() => {
    if (currentQuestion === 2 && nextQuestionId === 9) {
      setTotalQuestions(10);
    }

    if (currentQuestion === 3 && nextQuestionId === 1) {
      setTotalQuestions(9);
    }

    if (currentQuestion === 3 && nextQuestionId === 9) {
      setTotalQuestions(11);
    }
  }, [nextQuestionId, currentQuestion]);

  useEffect(() => {
    const progressBar = progressBarRef.current;
    const percent = (currentQuestion / totalQuestions) * 100;

    if (progressBar) {
      quizProgressAni(progressBar, percent);
    }
  }, [currentQuestion, totalQuestions]);

  const activeStyle =
    activeTheme === "blue"
      ? blueTheme
      : activeTheme === "purple"
      ? purpleTheme
      : greenTheme;

  return (
    <ProgressBarContainer style={activeStyle}>
      <ProgressTrack>
        <ProgressContainer>
          <Progress ref={progressBarRef} />
        </ProgressContainer>
      </ProgressTrack>
    </ProgressBarContainer>
  );
};
