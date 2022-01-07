import { useEffect, useRef } from "react";
import Link from "next/link";
import styled from "styled-components";

import {
  footerNavPixelSpreadAni,
  footerNavPixelsReturnAni,
} from "../../../animations/navigation";
import { useIsHovering } from "../../../hooks/componets/useIsHovering";
import { useActivePage } from "../../../hooks/componets/useActivePage";
import { buttonFocus } from "../../buttons/buttonStyles";
import { SiteTheme } from "../../../types/components";

interface NavLinkProps {
  navLabel: string;
  slug: string;
  color: SiteTheme;
}

const NavLinkContainer = styled.a`
  position: relative;
  padding: 12px 24px;
  text-decoration: none;
  border-radius: 16px;
  width: fit-content;
  cursor: pointer;
  &:focus {
    outline-color: var(--accent-2);
    outline-width: 2px;
    outline-offset: 4px;
    outline-style: dotted;
  }
  &:focus:not(:focus-visible) {
    outline: none;
  }
`;

const Label = styled.span`
  font-size: 2rem;
  font-weight: 700;
  color: var(--label-color);
  text-transform: capitalize;
  border-radius: 4px;
  ${buttonFocus}
  pointer-events: none;
  transition: color 200ms ease-in-out;
  z-index: 1;
`;

const Pixel = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  background: purple;
  width: 10px;
  height: 10px;
  opacity: 0;
  transform: translate(-50%, -50%);
  pointer-events: none;
`;

export const NavLink: React.FC<NavLinkProps> = ({ navLabel, slug, color }) => {
  const numPixels = [0, 1, 2, 3, 4, 5, 6, 7];
  const pixelArrayRef = useRef<HTMLDivElement[]>([]);

  const { isHovering, toggleIsHovering } = useIsHovering();
  const activePage = useActivePage();

  const isActive =
    navLabel === activePage || (navLabel === "home" && activePage === "");

  useEffect(() => {
    const pixelArray = pixelArrayRef.current;

    if (pixelArray && isHovering) {
      for (let i = 0; i < pixelArray.length; i++) {
        footerNavPixelSpreadAni(pixelArray[i], color, false);
      }
    }

    if (pixelArray && !isHovering) {
      for (let i = 0; i < pixelArray.length; i++) {
        footerNavPixelsReturnAni(pixelArray[i], false);
      }
    }
  }, [isHovering]);

  const pixels = numPixels.map((pixel) => (
    <Pixel
      key={pixel}
      ref={(el: HTMLDivElement) => (pixelArrayRef.current[pixel] = el)}
    />
  ));

  const styles = {
    "--label-color":
      isHovering || isActive ? "var(--accent-2)" : "var(--base-text-color)",
  } as React.CSSProperties;

  return (
    <Link href={slug} passHref={true}>
      <NavLinkContainer
        style={styles}
        onMouseOver={toggleIsHovering}
        onMouseLeave={toggleIsHovering}
      >
        {pixels}
        <Label>{navLabel}</Label>
      </NavLinkContainer>
    </Link>
  );
};
