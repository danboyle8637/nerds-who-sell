import { useState, useEffect, useRef, useMemo } from "react";
import styled from "styled-components";

import { HamburgerIcon } from "../HamburgerIcon";
import { MenuDrawer } from "../../overlays/MenuDrawer";
import { useActivePage } from "../../../hooks/componets/useActivePage";
import { Portal } from "../../shared/Portal";
import {
  navPixelsOpenAni,
  navPixelCloseAni,
} from "../../../animations/navigation";
import { SiteTheme } from "../../../types/components";

interface MobileNavProps {
  activeTheme: SiteTheme;
}

const NavContainer = styled.div`
  position: relative;
  padding: 12px 20px 0 0;
  display: flex;
`;

const Pixel = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  background-color: var(--pixel-color);
  width: 20px;
  height: 20px;
  opacity: 0;
`;

export const MobileNav: React.FC<MobileNavProps> = ({ activeTheme }) => {
  const pixelArray = [1, 2, 3, 4, 5, 6, 7, 8];

  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);

  const pixelArrayRef = useRef<HTMLDivElement[]>([]);

  const activePage = useActivePage();

  const pixels = useMemo(() => {
    return pixelArray.map((pixel, i) => (
      <Pixel
        key={pixel}
        ref={(el: HTMLDivElement) => (pixelArrayRef.current[i] = el)}
      />
    ));
  }, [pixelArray]);

  useEffect(() => {
    // kill tweens if we go to a landing page where we don't want to show the navbar
    const pixels = pixelArrayRef.current;

    return () => {
      if (pixels.length > 0) {
        for (let i = 0; i < pixelArray.length; i++) {
          navPixelCloseAni(pixels[i], true);
        }
      }
    };
  }, []);

  useEffect(() => {
    const pixels = pixelArrayRef.current;

    if (pixels && isNavOpen) {
      for (let i = 0; i < pixelArray.length; i++) {
        navPixelsOpenAni(pixels[i], activeTheme);
      }
    }

    if (pixels && !isNavOpen) {
      for (let i = 0; i < pixelArray.length; i++) {
        navPixelCloseAni(pixels[i], false);
      }
    }
  }, [isNavOpen]);

  const toggleNavDrawer = () => {
    setIsNavOpen((prevValue) => !prevValue);
  };

  return (
    <>
      <NavContainer>
        <HamburgerIcon handleClick={toggleNavDrawer} />
        {pixels}
      </NavContainer>
      <Portal>
        <MenuDrawer
          isOpen={isNavOpen}
          toggleNavDrawer={toggleNavDrawer}
          activePage={activePage}
          activeTheme={activeTheme}
        />
      </Portal>
    </>
  );
};
