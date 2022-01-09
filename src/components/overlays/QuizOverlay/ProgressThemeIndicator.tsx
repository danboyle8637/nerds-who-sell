import styled from "styled-components";

import { ProgressBar } from "../../forms/ProjectQuizForm/ProgressBar";
import { ThemeSwitcher } from "../../buttons/ThemeSwitcher";

interface IndicatorProps {
  currentQuestion: number;
  nextQuestion: number;
}

const IndicatorContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;
  gap: 12px;
  justify-items: center;
  width: fit-content;
`;

export const ProgressThemeIndicator: React.FC<IndicatorProps> = ({
  currentQuestion,
  nextQuestion,
}) => {
  return (
    <IndicatorContainer>
      <ProgressBar
        currentQuestion={currentQuestion}
        nextQuestionId={nextQuestion}
      />
      <ThemeSwitcher />
    </IndicatorContainer>
  );
};
