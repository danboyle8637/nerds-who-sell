import styled from "styled-components";

import { InputControlButton } from "../../buttons/InputControlButton";

interface InputControlsProps {
  nextQuestionId?: number;
  handleNextQuestion?: (questionId: number) => void;
  handlePrevQuestion: () => void;
}

const ControlsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  width: fit-content;
`;

export const InputControls: React.FC<InputControlsProps> = ({
  nextQuestionId,
  handleNextQuestion,
  handlePrevQuestion,
}) => {
  return (
    <ControlsContainer>
      {nextQuestionId && handleNextQuestion ? (
        <InputControlButton
          controlType="next"
          handleClick={() => handleNextQuestion(nextQuestionId)}
        />
      ) : null}
      <InputControlButton controlType="back" handleClick={handlePrevQuestion} />
    </ControlsContainer>
  );
};
