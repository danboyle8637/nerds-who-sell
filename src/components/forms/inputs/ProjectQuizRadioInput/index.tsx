import styled from "styled-components";

import { RadioOption } from "./Option";
import { AnswerOption } from "../../../../hooks/forms/useProjectQuizForm";
import { ProjectQuizFormInput } from "../../../../types/forms";

interface ProjectQuizRadioInputProps {
  name: ProjectQuizFormInput;
  inputLabel: string;
  options: AnswerOption[];
  updateInputValue: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

const InputContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;
  gap: 20px;
  justify-items: start;
  width: 360px;
`;

const OptionContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;
  gap: 24px;
  justify-items: center;
  width: 100%;
`;

const InputLabel = styled.p`
  padding-left: 14px;
  font-size: 1.5rem;
  font-weight: 700;
  color: #f8f8f8;
  text-transform: uppercase;
  letter-spacing: 0.15rem;
`;

export const ProjectQuizRadioInput: React.FC<ProjectQuizRadioInputProps> = ({
  name,
  inputLabel,
  options,
  updateInputValue,
}) => {
  const answers = options.map((option) => {
    const id = option.id;
    const value = option.value;
    const isSelected = option.isSelected;

    return (
      <RadioOption
        key={id}
        id={name}
        name={name}
        value={value}
        label={value}
        isSelected={isSelected}
        updateInputValue={updateInputValue}
      />
    );
  });

  return (
    <InputContainer>
      <InputLabel>{inputLabel}</InputLabel>
      <OptionContainer>{answers}</OptionContainer>
    </InputContainer>
  );
};
