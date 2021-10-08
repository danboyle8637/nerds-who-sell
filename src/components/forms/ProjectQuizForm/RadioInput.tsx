import styled from "styled-components";

import { MultiDirectionWithScaleTransition } from "../../../animations/transitions/MultiDirectionWithScaleTransition";
import { ProjectQuizRadioInput } from "../inputs/ProjectQuizRadioInput";
import { InputControls } from "./InputControls";
import { AnswerOption } from "../../../hooks/forms/useProjectQuizForm";
import { ProjectQuizFormInput } from "../../../types/forms";

interface RadioInputProps {
  activeId: number;
  questionId: number;
  name: ProjectQuizFormInput;
  inputLabel: string;
  options: AnswerOption[];
  updateInputValue: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  handlePrevQuestion: () => void;
}

const InputContainer = styled.div`
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;
  gap: 40px;
  justify-items: center;
  width: 100%;
`;

export const RadioInput: React.FC<RadioInputProps> = ({
  activeId,
  questionId,
  name,
  inputLabel,
  options,
  updateInputValue,
  handlePrevQuestion,
}) => {
  return (
    <MultiDirectionWithScaleTransition
      isActive={activeId === questionId}
      enterDirection="from_right"
      exitDirection="to_left"
    >
      <InputContainer>
        <ProjectQuizRadioInput
          name={name}
          inputLabel={inputLabel}
          options={options}
          updateInputValue={updateInputValue}
        />
        <InputControls handlePrevQuestion={handlePrevQuestion} />
      </InputContainer>
    </MultiDirectionWithScaleTransition>
  );
};
