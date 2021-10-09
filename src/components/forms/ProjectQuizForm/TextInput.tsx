import styled from "styled-components";

import { MultiDirectionWithScaleTransition } from "../../../animations/transitions/MultiDirectionWithScaleTransition";
import { TextInput } from "../inputs/TextInput";
import { InputControls } from "./InputControls";
import { ProjectQuizFormInput } from "../../../types/forms";

interface TextInputProps {
  activeId: number;
  questionId: number;
  nextQuestionId: number;
  inputName: ProjectQuizFormInput;
  labelName: string;
  labelFor: ProjectQuizFormInput;
  placeholder?: string;
  value: string;
  valid: boolean;
  initial: boolean;
  touched: boolean;
  updateInputValue: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  updateInputOptions: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  handleNextQuestion: (questionId: number) => void;
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

export const ProjectQuizTextInpu: React.FC<TextInputProps> = ({
  activeId,
  questionId,
  nextQuestionId,
  inputName,
  labelName,
  value,
  valid,
  initial,
  touched,
  updateInputValue,
  updateInputOptions,
  handleNextQuestion,
  handlePrevQuestion,
}) => {
  return (
    <MultiDirectionWithScaleTransition
      isActive={activeId === questionId}
      enterDirection="from_right"
      exitDirection="to_left"
    >
      <InputContainer>
        <TextInput
          inputType="text"
          inputName={inputName}
          labelName={labelName}
          labelFor={inputName}
          value={value}
          valid={valid}
          initial={initial}
          touched={touched}
          onChange={updateInputValue}
          onFocus={updateInputOptions}
          onBlur={updateInputOptions}
        />
        <InputControls
          activeId={activeId}
          nextQuestionId={nextQuestionId}
          handleNextQuestion={handleNextQuestion}
          handlePrevQuestion={handlePrevQuestion}
        />
      </InputContainer>
    </MultiDirectionWithScaleTransition>
  );
};
