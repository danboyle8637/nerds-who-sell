import styled from "styled-components";

import { InputControlButton } from "../../buttons/InputControlButton";

interface InputControlsProps {
  nextQuestionId: number;
  prevQuestionId: number;
  handleNextQuestion: (questionId: number) => void;
  handlePrevQuestion: (questionId: number) => void;
}

const ControlsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  width: fit-content;
`;

export const InputControls: React.FC<InputControlsProps> = ({
  nextQuestionId,
  prevQuestionId,
  handleNextQuestion,
  handlePrevQuestion,
}) => {
  return (
    <ControlsContainer>
      <InputControlButton
        controlType="back"
        nextQuestionId={nextQuestionId}
        prevQuestionId={prevQuestionId}
        handleClick={handlePrevQuestion}
      />
      <InputControlButton
        controlType="next"
        nextQuestionId={nextQuestionId}
        prevQuestionId={prevQuestionId}
        handleClick={handleNextQuestion}
      />
    </ControlsContainer>
  );
};
