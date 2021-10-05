import { useEffect, useRef, CSSProperties } from "react";
import styled from "styled-components";

import { CheckmarkIcon } from "../CheckmarkIcon";
import { ErrorIcon } from "../ErrorIcon";
import { InputActiveIcon } from "../InputActiveIcon";
import { darkFormTheme } from "../../../styles/themes/forms";
import { InputStatusTransition } from "../../../animations/transitions/InputStatusTransition";
import { moveLabelAboveInputAni } from "../../../animations/forms";
import { ContactFormInput, ProjectQuizFormInput } from "../../../types/forms";

interface TextInputProps {
  inputType: string;
  inputName: ContactFormInput | ProjectQuizFormInput;
  labelName: string;
  labelFor: ContactFormInput | ProjectQuizFormInput;
  labelError?: string;
  labelInstructions?: string;
  placeholder?: string;
  value: string;
  valid: boolean;
  initial: boolean;
  touched: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus: (event: React.FocusEvent<HTMLInputElement>) => void;
  onBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
}

const InputContainer = styled.div`
  position: relative;
  padding: 6px;
  display: grid;
  grid-template-columns: 1fr min-content;
  gap: 6px;
  background: var(--input-container-background);
  border-radius: 18px;
  width: 100%;
  box-shadow: 0 0 0 4px
    var(--input-container-box-shadow-color, hsla(240, 0%, 0%, 0.3));
  transition: box-shadow 300ms ease-in-out;
`;

const InputLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  font-size: 2rem;
  font-weight: 700;
  color: var(--input-label-color);
  width: 100%;
`;

const InputField = styled.input`
  margin: 0;
  padding: 12px 12px;
  font-size: 1.8rem;
  font-weight: 500;
  color: var(--input-text-color);
  background: var(--input-background);
  border: none;
  width: 100%;
  height: 60px;
  outline: none;
  caret-color: var(--input-caret, var(--color-accent-blue-1));
  &::placeholder {
    font-size: 16px;
    color: var(--input-placeholder);
  }
`;

const StatusContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  justify-items: center;
  align-items: center;
  width: 60px;
  height: 60px;
`;

const CheckmarkContainer = styled.div`
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  width: 40px;
  line-height: 0;
`;

const FormActiveContainer = styled.div`
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  width: 50px;
  line-height: 0;
`;

const FormErrorContainer = styled.div`
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  width: 34px;
  line-height: 0;
`;

export const TextInput: React.FC<TextInputProps> = ({
  inputType,
  inputName,
  labelName,
  labelFor,
  value,
  valid,
  initial,
  touched,
  onChange,
  onFocus,
  onBlur,
}) => {
  const inputLabelRef = useRef<HTMLLabelElement | null>(null);

  useEffect(() => {
    const inputLabel = inputLabelRef.current;

    if (inputLabel && touched && value === "") {
      moveLabelAboveInputAni(inputLabel, false);
    }

    if (inputLabel && !touched && value === "") {
      moveLabelAboveInputAni(inputLabel, true);
    }
  }, [touched, initial, value]);

  const isError = (
    <InputStatusTransition isActive={!valid && !touched && !initial}>
      <FormErrorContainer>
        <ErrorIcon />
      </FormErrorContainer>
    </InputStatusTransition>
  );

  const isActive = (
    <InputStatusTransition isActive={touched}>
      <FormActiveContainer>
        <InputActiveIcon />
      </FormActiveContainer>
    </InputStatusTransition>
  );

  const isValid = (
    <InputStatusTransition isActive={valid && !touched}>
      <CheckmarkContainer>
        <CheckmarkIcon />
      </CheckmarkContainer>
    </InputStatusTransition>
  );

  const inputStyles = {
    "--input-container-box-shadow-color": touched
      ? "hsl(260, 100%, 79%)"
      : !valid && !touched && !initial
      ? "hsl(345, 64%, 56%)"
      : valid && !touched
      ? "hsl(136, 68%, 61%)"
      : "hsla(240, 0%, 0%, 0.3)",
    ...darkFormTheme,
  } as CSSProperties;

  return (
    <InputContainer style={inputStyles}>
      <InputField
        type={inputType}
        id={inputName}
        name={inputName}
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
      />
      <InputLabel ref={inputLabelRef} htmlFor={labelFor}>
        {labelName}
      </InputLabel>
      <StatusContainer>
        {isError}
        {isActive}
        {isValid}
      </StatusContainer>
    </InputContainer>
  );
};
