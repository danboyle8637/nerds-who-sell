import { useEffect, useRef } from "react";
import styled from "styled-components";

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
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  width: 300px;
`;

const ButtonBooster = styled.div`
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  justify-self: center;
  align-self: center;
  background-image: radial-gradient(#1ab5de, #cff5ff);
  border-radius: 600px;
  width: 90%;
  height: 40px;
  filter: blur(16px);
  opacity: 0;
  pointer-events: none;
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
  const boosterRef = useRef<HTMLDivElement | null>(null);

  const { isHovering, toggleIsHovering } = useIsHovering();

  useEffect(() => {
    const booster = boosterRef.current;

    if (booster && isHovering) {
      buttonBoostersOnAni(booster);
    }

    if (booster && !isHovering) {
      buttonBoostersOffAni(booster);
    }
  }, [isHovering]);

  return (
    <ButtonContainer
      onMouseOver={toggleIsHovering}
      onMouseLeave={toggleIsHovering}
    >
      <Button type="button" onClick={handleClick}>
        {children}
      </Button>
      <ButtonBooster ref={boosterRef} />
    </ButtonContainer>
  );
};
