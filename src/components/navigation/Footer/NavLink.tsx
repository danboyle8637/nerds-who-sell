import { useEffect, useState, useRef, forwardRef } from "react";
import Link from "next/link";
import styled from "styled-components";

import {
  buttonBoostersOnAni,
  buttonBoostersOffAni,
} from "../../../animations/buttons";
import { useIsHovering } from "../../../hooks/componets/useIsHovering";
import { buttonFocus } from "../../buttons/buttonStyles";

interface NavLinkProps {
  navLabel: string;
  slug: string;
  width: number;
}

const NavLinkContainer = styled.div`
  position: relative;
  width: fit-content;
`;

const Label = styled.a`
  font-size: 2rem;
  font-weight: 700;
  color: var(--base-text-color);
  text-decoration: none;
  text-transform: capitalize;
  border-radius: 4px;
  ${buttonFocus}
`;

const LabelBooster = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  background-image: linear-gradient(to bottom, #cff5ff, #1ab5de);
  border-radius: 600px;
  width: 100%;
  height: 80px;
  filter: blur(16px);
  opacity: 0;
  pointer-events: none;
  transform: translateX(-50%);
`;

export const NavLink: React.FC<NavLinkProps> = ({ navLabel, slug, width }) => {
  const pixelArrayRef = useRef<HTMLDivElement | null>(null);

  const { isHovering, toggleIsHovering } = useIsHovering();

  useEffect(() => {
    const pixelArray = pixelArrayRef.current;

    if (pixelArray) {
      buttonBoostersOffAni(pixelArray);
    }
  }, []);

  useEffect(() => {
    const pixelArray = pixelArrayRef.current;

    if (pixelArray && isHovering) {
      buttonBoostersOnAni(pixelArray);
    }

    if (pixelArray && !isHovering) {
      buttonBoostersOffAni(pixelArray);
    }
  }, [isHovering]);

  const styles = {
    "--pixel-color": "var(--accent-2)",
  } as React.CSSProperties;

  return (
    <NavLinkContainer
      onMouseOver={toggleIsHovering}
      onMouseLeave={toggleIsHovering}
    >
      <Link href={slug} passHref={true}>
        <Label>{navLabel}</Label>
      </Link>
      <LabelBooster ref={pixelArrayRef} />
    </NavLinkContainer>
  );
};
