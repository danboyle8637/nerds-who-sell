import { useEffect, useRef } from "react";
import styled from "styled-components";

import { CloseIcon } from "../images/CloseIcon";
import { NavList } from "../navigation/MobileNavigation/NavList";
import { MobileNavDrawerTransition } from "../../animations/transitions/MobileNavDrawerTransition";
import {
  closeIconEnterAni,
  closeIconExitAni,
} from "../../animations/navigation";
import { buttonFocus } from "../buttons/buttonStyles";
import { sizes } from "../../styles/sizes";

interface MenuDrawerProps {
  activePage: string;
  isOpen: boolean;
  toggleNavDrawer: () => void;
}

const DrawerContainer = styled.div`
  position: fixed;
  top: 12px;
  left: 12px;
  right: 12px;
  bottom: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(to bottom, #1a1a1a, #000);
  border-radius: 12px;
  box-shadow: 2px 2px 8px 1px hsla(0, 0%, 0%, 0.3);
  z-index: 999;
  isolation: isolate;
  ${sizes.aboveMobile} {
    left: unset;
    width: 375px;
  }
  ${sizes.aboveTablet} {
    bottom: unset;
    height: 60%;
  }
  ${sizes.aboveIpadPro} {
    bottom: 0;
    height: unset;
  }
`;

const Close = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  background: none;
  border: none;
  width: 38px;
  cursor: pointer;
  ${buttonFocus}
`;

export const MenuDrawer: React.FC<MenuDrawerProps> = ({
  activePage,
  isOpen,
  toggleNavDrawer,
}) => {
  const closeIconRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const closeIcon = closeIconRef.current;

    if (closeIcon) {
      closeIcon.focus();
    }
  }, []);

  useEffect(() => {
    const closeIcon = closeIconRef.current;

    if (closeIcon && isOpen) {
      closeIconEnterAni(closeIcon);
    }

    if (closeIcon && !isOpen) {
      closeIconExitAni(closeIcon);
    }
  }, [isOpen]);

  return (
    <MobileNavDrawerTransition isOpen={isOpen}>
      <DrawerContainer>
        <Close
          ref={closeIconRef}
          tabIndex={0}
          type="button"
          aria-label="Close nav drawer"
          onClick={toggleNavDrawer}
        >
          <CloseIcon />
        </Close>
        <NavList
          isOpen={isOpen}
          toggleNavDrawer={toggleNavDrawer}
          activePage={activePage}
        />
      </DrawerContainer>
    </MobileNavDrawerTransition>
  );
};
