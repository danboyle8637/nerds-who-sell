import { useRef, useMemo, useEffect } from "react";
import styled from "styled-components";

import { useIsHovering } from "../../../hooks/componets/useIsHovering";
import { siteThemeStore } from "../../../../lib/siteThemeStore";
import { baseButtonStyles } from "../buttonStyles";
import {
  actionButtonPixelSpreadAni,
  actionButtonPixelsReturnAni,
} from "../../../animations/buttons";

interface ActionButtonProps {
  handleClick: () => void;
}

const ButtonContainer = styled.div`
  position: relative;
  width: 300px;
  isolation: isolate;
`;

const Button = styled.button`
  ${baseButtonStyles}
  background-color: var(--accent-2);
  transition: box-shadow, background-color, 300ms ease-in-out;
  &:hover {
    box-shadow: 0 4px 4px 0px hsla(0, 0%, 0%, 0.6),
      0 0 0 6px var(--action-button-shadow);
  }
  &:focus:not(:focus-visible) {
    outline: none;
  }
`;

const Pixel = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 10px;
  height: 10px;
  opacity: 0;
  transform: translate(-50%, -50%);
  pointer-events: none;
  z-index: -1;
`;

export const ActionButton: React.FC<ActionButtonProps> = ({
  handleClick,
  children,
}) => {
  const numPixels = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
  const pixelArrayRef = useRef<HTMLDivElement[]>([]);

  const activeTheme = siteThemeStore((state) => state.activeTheme);

  const { isHovering, toggleIsHovering } = useIsHovering();

  useEffect(() => {
    const pixelArray = pixelArrayRef.current;

    if (pixelArray && isHovering) {
      for (let i = 0; i <= pixelArray.length; i++) {
        actionButtonPixelSpreadAni(pixelArray[i], activeTheme, false);
      }
    }

    if (pixelArray && !isHovering) {
      for (let i = 0; i <= pixelArray.length; i++) {
        actionButtonPixelsReturnAni(pixelArray[i], false);
      }
    }
  }, [isHovering]);

  const pixels = useMemo(() => {
    return numPixels.map((pixel) => (
      <Pixel
        key={pixel}
        ref={(el: HTMLDivElement) => (pixelArrayRef.current[pixel] = el)}
      />
    ));
  }, [numPixels]);

  return (
    <ButtonContainer
      onMouseOver={toggleIsHovering}
      onMouseLeave={toggleIsHovering}
    >
      <Button type="button" onClick={handleClick}>
        {children}
      </Button>
      {pixels}
    </ButtonContainer>
  );
};
