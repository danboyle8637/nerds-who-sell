import { useState, useEffect, useRef } from "react";
import styled from "styled-components";

import {
  smallHeadline,
  largeHeadline,
  bodyText,
} from "../../../styles/typography";
import { NerdWhoSells } from "../../../components/images/NerdWhoSells";
import { MatrixCat } from "../../../components/images/MatrixCat";
import { MeowDown } from "../../../components/images/MatrixCat/MeowDown";
import { MeowUp } from "../../../components/images/MatrixCat/MeowUp";
import { MatrixRainBackground } from "../../../components/fun/MatrixRainBackground";
import { ActionButton } from "../../../components/buttons/ActionButton";
import { dejaVuExitAni } from "../../../animations/images";
import { nerdsWhoSellStore } from "../../../../lib/store";
import { sizes } from "../../../styles/sizes";

const SectionContainer = styled.section`
  position: relative;
  padding: 60px 12px;
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;
  gap: 60px;
  justify-items: center;
  width: 100%;
  isolation: isolate;
  ${sizes.aboveMobile} {
    padding: 120px 0;
    gap: 40px;
    width: fit-content;
  }
  ${sizes.aboveTablet} {
    padding: 160px 0;
    align-self: center;
    transform: translateX(-60px);
  }
  ${sizes.aboveIpadPro} {
    padding: 100px 0;
  }
`;

const HeadlineContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;
  gap: 0;
  width: 100%;
`;

const MainHeadline = styled.h2`
  ${largeHeadline}
  display: grid;
  grid-template-areas:
    "one"
    "two"
    "three";
  gap: 4px;
  justify-items: start;
  width: 100%;
  ${sizes.aboveMobile} {
    grid-template-areas: "one two three";
    gap: 20px;
  }
`;

const Nerd = styled.span`
  grid-area: one;
  width: 100%;
`;

const Who = styled.span`
  grid-area: two;
  padding-left: 20px;
  width: 100%;
  ${sizes.aboveMobile} {
    padding-left: 0;
  }
`;

const Sells = styled.span`
  grid-area: three;
  padding-left: 40px;
  width: 100%;
  ${sizes.aboveMobile} {
    padding-left: 0;
  }
`;

const PreHeadline = styled.h3`
  ${smallHeadline}
  color: var(--accent-1);
  justify-self: start;
  ${sizes.aboveMobile} {
    padding-left: 40px;
  }
`;

const SubHeadline = styled.h4`
  ${bodyText}
  justify-self: start;
  font-size: 1.5rem;
  line-height: 1.6;
  ${sizes.aboveMobile} {
    justify-self: center;
  }
`;

const TheNerd = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 240px;
  transform: translate(10px, 40px);
  z-index: -1;
  ${sizes.aboveMobile} {
    width: 300px;
    transform: translate(160px, -40px);
  }
  ${sizes.aboveTablet} {
    width: 320px;
    transform: translate(280px, 0);
  }
  ${sizes.aboveIpadPro} {
    transform: translate(340px, 20px);
  }
`;

const DejaVuContainer = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 120px;
  transform: translate(24px, 12px);
  ${sizes.aboveMobile} {
    bottom: 0;
    right: 0;
    transform: translate(180px, -140px);
  }
`;

const DejaVu = styled.div`
  width: 100%;
`;

const MeowMobile = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 80px;
  opacity: 0;
  transform-origin: top right;
  transform: scale(0);
`;

export const IntroductionSection = () => {
  const [shouldMatrixRain, setShouldMatrixRain] = useState<boolean>(false);
  const dejaVuRef = useRef<HTMLDivElement | null>(null);
  const meowRef = useRef<HTMLDivElement | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout>();

  const toggleQuizOverlay = nerdsWhoSellStore(
    (state) => state.toggleQuizOverlay
  );

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleButtonClick = () => {
    toggleQuizOverlay();
  };

  const handleDejaVuClick = () => {
    const dejaVu = dejaVuRef.current;
    const meow = meowRef.current;

    setShouldMatrixRain(true);

    timeoutRef.current = setTimeout(() => {
      setShouldMatrixRain(false);

      if (dejaVu && meow) {
        dejaVuExitAni(dejaVu, meow);
      }
    }, 1700);
  };

  return (
    <SectionContainer>
      <HeadlineContainer>
        <PreHeadline>You need a...</PreHeadline>
        <MainHeadline>
          <Nerd>Nerd</Nerd>
          <Who>Who</Who>
          <Sells>Sells</Sells>
        </MainHeadline>
        <SubHeadline>Web Developer Who Writes Copy</SubHeadline>
      </HeadlineContainer>
      <ActionButton handleClick={handleButtonClick}>
        Let's Setup a Chat!
      </ActionButton>
      <TheNerd>
        <NerdWhoSells />
      </TheNerd>
      <DejaVuContainer>
        <DejaVu ref={dejaVuRef} onClick={handleDejaVuClick}>
          <MatrixCat />
        </DejaVu>
        <MeowMobile ref={meowRef}>
          <MeowDown />
        </MeowMobile>
      </DejaVuContainer>
      <MatrixRainBackground
        runAction={shouldMatrixRain}
        shouldRainHalf={false}
      />
    </SectionContainer>
  );
};
