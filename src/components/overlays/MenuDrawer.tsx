import { useEffect, useRef } from "react";
import styled from "styled-components";

import { CloseIcon } from "../images/CloseIcon";
import { NavList } from "../navigation/MobileNavigation/NavList";
import { MatrixTerminal } from "../images/navigation/MatrixTerminal";
import { BlueTerminal } from "../images/navigation/BlueTerminal";
import { PurpleTerminal } from "../images/navigation/PurpleTerminal";
import { ThemeSwitcher } from "../buttons/ThemeSwitcher";
import { MobileNavDrawerTransition } from "../../animations/transitions/MobileNavDrawerTransition";
import {
  closeIconEnterAni,
  closeIconExitAni,
} from "../../animations/navigation";
import { buttonFocus } from "../buttons/buttonStyles";
import { blueTheme, purpleTheme, greenTheme } from "../../styles/colors";
import { SiteTheme } from "../../types/components";
import { sizes } from "../../styles/sizes";

interface MenuDrawerProps {
  activePage: string;
  isOpen: boolean;
  toggleNavDrawer: () => void;
  activeTheme: SiteTheme;
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

const ThemeSwitcherContainer = styled.div`
  position: absolute;
  bottom: 40px;
  left: 50%;
  width: fit-content;
  transform: translateX(-50%);
`;

export const MenuDrawer: React.FC<MenuDrawerProps> = ({
  activePage,
  isOpen,
  toggleNavDrawer,
  activeTheme,
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

  const mobileNavStyles =
    activeTheme === "blue"
      ? blueTheme
      : activeTheme === "purple"
      ? purpleTheme
      : greenTheme;

  return (
    <MobileNavDrawerTransition isOpen={isOpen}>
      <DrawerContainer style={mobileNavStyles}>
        {activeTheme === "blue" ? (
          <BlueTerminal />
        ) : activeTheme === "green" ? (
          <MatrixTerminal />
        ) : (
          <PurpleTerminal />
        )}
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
        <ThemeSwitcherContainer>
          <ThemeSwitcher />
        </ThemeSwitcherContainer>
      </DrawerContainer>
    </MobileNavDrawerTransition>
  );
};
