import { CSSProperties } from "react";
import styled from "styled-components";

import { Option } from "../RadioInput/Option";
import { AnswerOption } from "../../../../hooks/forms/useProjectQuizForm";
import { siteThemeStore } from "../../../../../lib/siteThemeStore";
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
  width: 100%;
  max-width: 360px;
`;

const InputLabel = styled.p`
  font-family: "VT323", monospace;
  font-size: 3.2rem;
  font-weight: 700;
  color: hsl(227, 37%, 93%);
  text-shadow: 0 0 12px var(--question-glow);
  line-height: 1.4;
  letter-spacing: 0.15rem;
`;

const OptionContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;
  gap: 24px;
  justify-items: center;
  width: 100%;
`;

export const ProjectQuizRadioInput: React.FC<ProjectQuizRadioInputProps> = ({
  name,
  inputLabel,
  options,
  updateInputValue,
}) => {
  const activeTheme = siteThemeStore((state) => state.activeTheme);

  const optionStyles = {
    "--input-label-color":
      activeTheme === "blue"
        ? "hsl(176, 92%, 53%)"
        : activeTheme === "purple"
        ? "hsl(246, 59%, 62%)"
        : "hsl(120, 100%, 50%)",
    "--question-glow":
      activeTheme === "blue"
        ? "hsl(176, 92%, 53%)"
        : activeTheme === "purple"
        ? "hsl(246, 59%, 62%)"
        : "hsl(120, 100%, 50%)",
  } as CSSProperties;

  const answers = options.map((option) => {
    const id = option.id;
    const value = option.value;
    const label = option.label;
    const isSelected = option.isSelected;

    return (
      <Option
        key={id}
        id={value}
        name={name}
        value={value}
        label={label}
        isChecked={isSelected}
        updateInputValue={updateInputValue}
      />
    );
  });

  return (
    <InputContainer style={optionStyles}>
      <InputLabel>{inputLabel}</InputLabel>
      <OptionContainer>{answers}</OptionContainer>
    </InputContainer>
  );
};
