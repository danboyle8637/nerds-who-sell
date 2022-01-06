import { useState, useRef } from "react";
import styled from "styled-components";

import { MatrixRainBackground } from "../fun/MatrixRainBackground";
import { useIsHovering } from "../../hooks/componets/useIsHovering";
import { baseButtonStyles } from "./buttonStyles";
import {
  buttonBoostersOnAni,
  buttonBoostersOffAni,
} from "../../animations/buttons";

interface ActionButtonProps {
  handleClick: () => void;
}

const ButtonContainer = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  width: 300px;
  isolation: isolate;
`;

const ButtonCodeBackground = styled.div`
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  background-color: black;
  border-radius: 12px;
  width: 100%;
  height: 100%;
  transform: translate(18px, 20px) rotate(4grad);
`;

const Button = styled.button`
  ${baseButtonStyles}
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  z-index: 1;
`;

export const ActionButton: React.FC<ActionButtonProps> = ({
  handleClick,
  children,
}) => {
  const [isHovering, setIsHovering] = useState<boolean>(false);

  const handleStartMatrixRain = () => {
    console.log(isHovering);
    if (!isHovering) {
      setIsHovering(true);
    }
  };

  const handleResetMatrixRain = () => {
    if (isHovering) {
      setIsHovering(false);
    }
  };

  return (
    <ButtonContainer onMouseOver={handleStartMatrixRain}>
      <Button type="button" onClick={handleClick}>
        {children}
      </Button>
    </ButtonContainer>
  );
};
