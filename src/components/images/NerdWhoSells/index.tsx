import { useEffect, useRef } from "react";
import styled from "styled-components";

import { TheNerd } from "./TheNerd";
import { DollarBillMessage } from "./DollarBillMessage";
import { useIntersectionObserver } from "../../../hooks/componets/useIntersectionObserver";
import {
  dollarBillCellAni,
  dollarBillLaptopAni,
} from "../../../animations/images";
import { siteThemeStore } from "../../../../lib/siteThemeStore";
import { sizes } from "../../../styles/sizes";

const NerdContainer = styled.div`
  position: relative;
  width: 100%;
  isolation: isolate;
  pointer-events: none;
`;

const DollarBillCell = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 60px;
  transform: translateY(90px) scale(0);
  z-index: 1;
  ${sizes.aboveMobile} {
    width: 70px;
  }
  ${sizes.aboveTablet} {
    width: 80px;
  }
`;

const DollarBillLaptop = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 60px;
  transform: translate(-20px, 90px) scale(0);
  z-index: 1;
  ${sizes.aboveMobile} {
    width: 70px;
  }
  ${sizes.aboveTablet} {
    width: 80px;
  }
`;

export const NerdWhoSells = () => {
  const dollarCellRef = useRef<HTMLDivElement | null>(null);
  const dollarLaptopRef = useRef<HTMLDivElement | null>(null);

  const activeTheme = siteThemeStore((state) => state.activeTheme);

  const { nodeRef, runAction } = useIntersectionObserver({
    threshold: 0.8,
    shouldUnobserve: true,
  });

  useEffect(() => {
    const dollarCell = dollarCellRef.current;
    const dollarLaptop = dollarLaptopRef.current;

    if (dollarCell && dollarLaptop && runAction) {
      dollarBillCellAni(dollarCell);
      dollarBillLaptopAni(dollarLaptop);
    }
  }, [runAction]);

  return (
    <NerdContainer ref={nodeRef}>
      <TheNerd
        imageUrl={
          activeTheme !== "green"
            ? "https://ik.imagekit.io/csu76xuqqlwj/nerds-who-sell/site-assets/nerds-who-sell-online_1TWzgRwN9.png"
            : "https://ik.imagekit.io/csu76xuqqlwj/nerds-who-sell/site-assets/nerds-who-sell-online-sunglasses_H5ULzGBNq.png"
        }
      />
      <DollarBillCell ref={dollarCellRef}>
        <DollarBillMessage />
      </DollarBillCell>
      <DollarBillLaptop ref={dollarLaptopRef}>
        <DollarBillMessage />
      </DollarBillLaptop>
    </NerdContainer>
  );
};
