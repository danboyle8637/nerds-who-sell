import styled from "styled-components";

import { InputControlButton } from "../../buttons/InputControlButton";

interface InputControlsProps {
  handlePrevQuestion: () => void;
}

const ControlsContainer = styled.div`
  display: flex;
  justify-content: center;
  width: fit-content;
`;

export const InputControls: React.FC<InputControlsProps> = ({
  handlePrevQuestion,
}) => {
  return (
    <ControlsContainer>
      <InputControlButton controlType="back" handleClick={handlePrevQuestion} />
    </ControlsContainer>
  );
};
