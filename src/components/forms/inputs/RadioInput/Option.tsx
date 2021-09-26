import { useEffect, useRef } from "react";
import styled from "styled-components";

import {
  basicRadioIsChecked,
  basicRadioIsNotChecked,
} from "../../../../animations/forms";

interface BasicRadioOptionProps {
  id: string;
  name: string;
  value: string;
  label: string;
  isChecked: boolean;
  updateInputValue: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputLabel = styled.label`
  display: grid;
  grid-template-columns: min-content 1fr;
  gap: 12px;
  justify-items: start;
  align-items: center;
  font-size: 1.8rem;
  font-weight: 600;
  color: var(--paragraph-font-color);
  width: 100%;
  cursor: pointer;
`;

const CircleRadioContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  justify-items: center;
  align-items: center;
  width: 20px;
  height: 20px;
`;

const RadioInput = styled.input.attrs({ type: "radio" })`
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  visibility: hidden;
  margin: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

const CircleBorder = styled.div`
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  background: transparent;
  border-radius: 100%;
  width: 100%;
  height: 100%;
  box-shadow: 0 0 0 2px var(--color-accent-blue-1);
`;

const CircleSelect = styled.div`
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  background-color: var(--color-accent-blue-1);
  border-radius: 100%;
  width: 80%;
  height: 80%;
  opacity: 0;
  transform: scale(0);
`;

export const Option: React.FC<BasicRadioOptionProps> = ({
  id,
  name,
  value,
  isChecked,
  label,
  updateInputValue,
}) => {
  const checkedDotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkedDot = checkedDotRef.current;

    if (checkedDot && isChecked) {
      basicRadioIsChecked(checkedDot);
    }

    if (checkedDot && !isChecked) {
      basicRadioIsNotChecked(checkedDot);
    }
  }, [isChecked]);

  return (
    <>
      <InputLabel htmlFor={id}>
        <CircleRadioContainer>
          <CircleBorder />
          <CircleSelect ref={checkedDotRef} />
          <RadioInput
            type="radio"
            id={id}
            name={name}
            value={value}
            onChange={updateInputValue}
          />
        </CircleRadioContainer>
        {label}
      </InputLabel>
    </>
  );
};
