import styled from "styled-components";

import { Option } from "./Option";
import { darkFormTheme } from "../../../../styles/themes/forms";
import { Option as OptionType } from "../../../../types/forms";

interface RadioInputProps {
  name: string;
  inputLabel: string;
  options: OptionType[];
  updateInputValue: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;
  gap: 40px;
  justify-items: start;
  width: 100%;
  max-width: 500px;
`;

const InputQuestion = styled.p`
  font-size: 2rem;
  font-weight: 600;
  color: var(--input-label-color);
`;

const OptionsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;
  gap: 20px;
  width: 100%;
`;

export const RadioInput: React.FC<RadioInputProps> = ({
  name,
  inputLabel,
  options,
  updateInputValue,
}) => {
  const radioOptions = options.map((option) => {
    const id = option.id;
    const label = option.label;
    const value = option.value;
    const isChecked = option.isChecked;

    return (
      <Option
        key={id}
        id={value}
        name={name}
        value={value}
        label={label}
        isChecked={isChecked}
        updateInputValue={updateInputValue}
      />
    );
  });

  return (
    <InputContainer style={darkFormTheme}>
      <InputQuestion>{inputLabel}</InputQuestion>
      <OptionsContainer>{radioOptions}</OptionsContainer>
    </InputContainer>
  );
};
