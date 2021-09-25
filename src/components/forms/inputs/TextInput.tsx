import * as React from "react";
import { useEffect, useRef, CSSProperties } from "react";
import styled from "styled-components";

import { CheckmarkIcon } from "../CheckmarkIcon";
import { ErrorIcon } from "../ErrorIcon";
import { InputActiveIcon } from "../InputActiveIcon";
import { InputStatusTransition } from "../../../../animations/transitions/InputStatusTransition";
import { moveLabelAboveInputAni } from "../../../../animations/forms";

interface TextInputProps {
  inputType: string;
  inputName: string;
  labelName: string;
  labelFor: string;
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
  background: var(--input-container-background, hsla(227, 30%, 40%));
  border-radius: 18px;
  width: 100%;
  max-width: 400px;
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
  color: var(--input-label, var(--color-accent-blue-2));
  transform: translate(16%, 100%);
`;

const InputField = styled.input`
  margin: 0;
  padding: 12px 12px;
  font-size: 1.8rem;
  font-weight: 500;
  color: var(--input-text, var(--color-accent-blue-1));
  background: var(--input-background, "none");
  border: none;
  width: 100%;
  height: 60px;
  outline: none;
  caret-color: var(--input-caret, var(--color-accent-blue-1));
  &::placeholder {
    font-size: 16px;
    color: var(--input-placeholder, var(--dark-theme-background));
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

const Checkmark = styled(CheckmarkIcon)`
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  width: 30px;
`;

const FormActive = styled(InputActiveIcon)`
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  width: 30px;
`;

const FormError = styled(ErrorIcon)`
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  width: 24px;
`;

export const IconFarRightTextInput: React.FC<TextInputProps> = ({
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
      <FormError isError={!valid && !touched} />
    </InputStatusTransition>
  );

  const isActive = (
    <InputStatusTransition isActive={touched}>
      <FormActive />
    </InputStatusTransition>
  );

  const isValid = (
    <InputStatusTransition isActive={valid && !touched}>
      <Checkmark />
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
