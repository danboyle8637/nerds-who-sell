import styled from "styled-components";

import { InputControlButton } from "../../buttons/InputControlButton";
import { FormButton } from "../../buttons/FormButton";

interface InputControlsProps {
  activeId: number;
  nextQuestionId?: number;
  handleNextQuestion?: (questionId: number) => void;
  handlePrevQuestion: () => void;
  valid?: boolean;
}

const ControlsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  width: fit-content;
  height: 56px;
`;

export const InputControls: React.FC<InputControlsProps> = ({
  activeId,
  nextQuestionId,
  handleNextQuestion,
  handlePrevQuestion,
  valid = true,
}) => {
  const showControls = activeId === 11 || activeId === 12 ? false : true;

  console.log(valid);

  return (
    <ControlsContainer>
      {showControls ? (
        <>
          <InputControlButton
            controlType="back"
            handleClick={handlePrevQuestion}
            isValid={true}
          />
          {nextQuestionId && handleNextQuestion ? (
            <InputControlButton
              controlType="next"
              handleClick={() => handleNextQuestion(nextQuestionId)}
              isValid={valid}
            />
          ) : null}
        </>
      ) : null}
      {nextQuestionId === 99 ? (
        <FormButton isDisabled={!valid}>
          {!valid ? "Finish Last Step" : "Let's Talk!"}
        </FormButton>
      ) : null}
    </ControlsContainer>
  );
};
