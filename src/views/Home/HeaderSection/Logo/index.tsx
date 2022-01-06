import { useEffect, useRef } from "react";
import styled from "styled-components";

import { NerdsWhoRockLaptops } from "../../../../components/images/NerdsWhoRockLaptops";
import { NerdsWhoRockLaptopsSunglasses } from "../../../../components/images/NerdsWhoRockLaptopsSunglasses";
import { NerdsWhoSellLogo } from "../../../../components/images/NerdsWhoSellLogo";
import { mainLogoScreenGlow } from "../../../../animations/images";
import { siteThemeStore } from "../../../../../lib/siteThemeStore";

const LogoContainer = styled.div`
  align-self: flex-start;
  position: relative;
  width: 250px;
  transform: translateX(-20px);
  isolation: isolate;
`;

const TheNerd = styled.div`
  width: 142px;
  pointer-events: none;
`;

const LaptopGlow = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: var(--accent-2);
  border-radius: 50%;
  width: 20px;
  height: 20px;
  filter: blur(12px);
  transform: translate(100px, 30px);
  z-index: -1;
`;

export const Logo = () => {
  const screenGlowRef = useRef<HTMLDivElement | null>(null);

  const activeTheme = siteThemeStore((state) => state.activeTheme);

  useEffect(() => {
    const screenGlow = screenGlowRef.current;

    if (screenGlow) {
      mainLogoScreenGlow(screenGlow);
    }
  }, []);

  return (
    <LogoContainer>
      <TheNerd>
        {activeTheme !== "green" ? (
          <NerdsWhoRockLaptops />
        ) : (
          <NerdsWhoRockLaptopsSunglasses />
        )}
      </TheNerd>
      <NerdsWhoSellLogo />
      <LaptopGlow ref={screenGlowRef} />
    </LogoContainer>
  );
};
