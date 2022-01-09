import { useEffect, useRef, CSSProperties } from "react";
import styled from "styled-components";

import { CheckmarkIcon } from "../CheckmarkIcon";
import { ErrorIcon } from "../ErrorIcon";
import { InputActiveIcon } from "../InputActiveIcon";
import { CharacterCountChip } from "../../chips/CharacterCountChip";
import { darkFormTheme } from "../../../styles/themes/forms";
import { InputStatusTransition } from "../../../animations/transitions/InputStatusTransition";
import {
  moveLabelAboveTextareaAni,
  setLabelAboveTextareaAni,
} from "../../../animations/forms";
import { ContactFormInput, ProjectQuizFormInput } from "../../../types/forms";

interface TextareaProps {
  name: ContactFormInput | ProjectQuizFormInput;
  labelName: string;
  labelFor: ContactFormInput | ProjectQuizFormInput;
  labelError?: string;
  labelInstructions?: string;
  placeholder?: string;
  maxLength: number;
  rows: number;
  value: string;
  valid: boolean;
  initial: boolean;
  touched: boolean;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onFocus: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
  onBlur: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
  onKeyDown?: (event: React.KeyboardEvent) => void;
}

const InputContainer = styled.div`
  position: relative;
  padding: 6px;
  display: grid;
  grid-template-columns: 1fr min-content;
  gap: 6px;
  align-items: start;
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
  transform: translate(16%, 100%);
`;

const TextareaField = styled.textarea`
  margin: 0;
  padding: 12px 12px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 1.8rem;
  font-weight: 500;
  color: var(--input-text-color);
  background: var(--input-background);
  border: none;
  width: 100%;
  outline: none;
  caret-color: var(--input-caret);
  resize: none;
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

const CharacterCountContainer = styled.div`
  position: absolute;
  bottom: 8px;
  right: 8px;
`;

export const Textarea: React.FC<TextareaProps> = ({
  name,
  labelName,
  labelFor,
  placeholder,
  maxLength,
  rows,
  value,
  valid,
  initial,
  touched,
  onChange,
  onFocus,
  onBlur,
  onKeyDown,
}) => {
  const inputLabelRef = useRef<HTMLLabelElement | null>(null);

  useEffect(() => {
    const inputLabel = inputLabelRef.current;

    if (inputLabel && touched && value === "") {
      moveLabelAboveTextareaAni(inputLabel, false);
    }

    if (inputLabel && !touched && value.length > 0) {
      setLabelAboveTextareaAni(inputLabel);
    }

    if (inputLabel && !touched && value === "") {
      moveLabelAboveTextareaAni(inputLabel, true);
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
      <TextareaField
        typeof="text"
        id={name}
        name={name}
        value={value}
        placeholder={placeholder}
        maxLength={maxLength}
        rows={rows}
        spellCheck={true}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        onKeyDown={onKeyDown ? onKeyDown : undefined}
      />
      <InputLabel ref={inputLabelRef} htmlFor={labelFor}>
        {labelName}
      </InputLabel>
      <StatusContainer>
        {isError}
        {isActive}
        {isValid}
      </StatusContainer>
      <CharacterCountContainer>
        <CharacterCountChip value={value} maxCount={maxLength} />
      </CharacterCountContainer>
    </InputContainer>
  );
};
