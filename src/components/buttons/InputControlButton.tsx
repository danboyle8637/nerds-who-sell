import styled from "styled-components";

type ButtonControlType = "back" | "next";

interface InputControlButtonProps {
  controlType: ButtonControlType;
  nextQuestionId: number;
  prevQuestionId: number;
  handleClick: (questionId: number) => void;
}

const Button = styled.button`
  padding: 8px 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 1.4rem;
  color: var(--base-text-color);
  text-transform: uppercase;
  letter-spacing: 0.08rem;
  background-color: var(--accent-1);
  border: none;
  border-radius: 6px;
  outline: none;
  width: 100px;
  height: 32px;
  box-shadow: 0 4px 4px 0 hsla(0, 0%, 0%, 0.25);
`;

export const InputControlButton: React.FC<InputControlButtonProps> = ({
  controlType,
  nextQuestionId,
  prevQuestionId,
  handleClick,
}) => {
  const label = controlType === "back" ? "back" : "next";
  const questionId = controlType === "back" ? prevQuestionId : nextQuestionId;

  return (
    <Button type="button" onClick={() => handleClick(questionId)}>
      {label}
    </Button>
  );
};
