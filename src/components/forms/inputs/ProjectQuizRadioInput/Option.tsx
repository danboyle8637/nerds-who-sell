import styled from "styled-components";

interface RadioOptionProps {
  id: string;
  name: string;
  value: string;
  label: string;
  isSelected: boolean;
  updateInputValue: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

const InputLabel = styled.label`
  margin: 0;
  padding: 16px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  justify-items: start;
  align-items: center;
  font-size: 1.8rem;
  color: var(--label-color);
  background-color: var(--label-background);
  border-radius: 12px;
  width: 100%;
  cursor: pointer;
  box-shadow: 0 0 0 6px var(--label-box-shadow);
  transition: color, background-color, box-shadow, 400ms ease-in-out;
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

const Label = styled.span`
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const RadioOption: React.FC<RadioOptionProps> = ({
  id,
  name,
  value,
  label,
  isSelected,
  updateInputValue,
}) => {
  const styles = {
    "--label-color": isSelected ? "var(--accent-2)" : "var(--base-text-color)",
    "--label-background": isSelected
      ? "hsla(176, 92%, 53%, 0.4)"
      : "hsla(226, 32%, 16%, 0.4)",
    "--label-box-shadow": isSelected
      ? "var(--accent-2)"
      : "var(--section-background-5)",
  } as React.CSSProperties;

  return (
    <InputLabel style={styles} htmlFor={id}>
      <RadioInput
        type="radio"
        id={id}
        name={name}
        value={value}
        onChange={updateInputValue}
      />
      <Label>{label}</Label>
    </InputLabel>
  );
};
