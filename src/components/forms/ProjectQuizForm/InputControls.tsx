import styled from "styled-components";

import { InputControlButton } from "../../buttons/InputControlButton";
import { FormButton } from "../../buttons/FormButton";

interface InputControlsProps {
  activeId: number;
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
  activeId,
  nextQuestionId,
  handleNextQuestion,
  handlePrevQuestion,
}) => {
  const showControls = activeId === 11 || activeId === 8 ? false : true;
  const showNext = nextQuestionId && handleNextQuestion;

  return (
    <ControlsContainer>
      {showControls ? (
        <>
          <InputControlButton
            controlType="back"
            handleClick={handlePrevQuestion}
          />
          {nextQuestionId && handleNextQuestion ? (
            <InputControlButton
              controlType="next"
              handleClick={() => handleNextQuestion(nextQuestionId)}
            />
          ) : null}
        </>
      ) : null}
      {nextQuestionId === 99 ? (
        <FormButton isDisabled={false}>Let's Schedule a Talk!</FormButton>
      ) : null}
    </ControlsContainer>
  );
};
