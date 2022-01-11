import styled, { css } from "styled-components";

import { InputControls } from "./InputControls";
import { MultiDirectionWithScaleTransition } from "../../../animations/transitions/MultiDirectionWithScaleTransition";

interface NameEmailInputProps {
  activeId: number;
  questionId: number;
  nextQuestionId?: number;
  handleNextQuestion?: (questionId: number) => void;
  handlePrevQuestion: () => void;
  valid: boolean;
}

const sharedStyles = css`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;
  justify-items: center;
  gap: 40px;
  width: 100%;
`;

const InputContainer = styled.div`
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  ${sharedStyles}
`;

const TextInputContainer = styled.div`
  ${sharedStyles}
`;

export const NameEmailInput: React.FC<NameEmailInputProps> = ({
  activeId,
  questionId,
  nextQuestionId,
  handleNextQuestion,
  handlePrevQuestion,
  children,
  valid,
}) => {
  return (
    <MultiDirectionWithScaleTransition
      isActive={activeId === questionId}
      enterDirection="from_right"
      exitDirection="to_left"
    >
      <InputContainer>
        <TextInputContainer>{children}</TextInputContainer>
        <InputControls
          activeId={activeId}
          nextQuestionId={nextQuestionId}
          handleNextQuestion={handleNextQuestion}
          handlePrevQuestion={handlePrevQuestion}
          valid={valid}
        />
      </InputContainer>
    </MultiDirectionWithScaleTransition>
  );
};
