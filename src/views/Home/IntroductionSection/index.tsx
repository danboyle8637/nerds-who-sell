import styled from "styled-components";

import {
  smallHeadline,
  largeHeadline,
  bodyText,
} from "../../../styles/typography";
import { NerdWhoSells } from "../../../components/images/NerdWhoSells";
import { ActionButton } from "../../../components/buttons/ActionButton";
import { sizes } from "../../../styles/sizes";

const SectionContainer = styled.section`
  position: relative;
  padding: 0 12px;
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;
  gap: 60px;
  justify-items: center;
  width: 100%;
  ${sizes.aboveMobile} {
    gap: 40px;
    width: fit-content;
  }
  ${sizes.aboveTablet} {
    align-self: center;
    transform: translateX(-60px);
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
  width: 230px;
  transform: translate(10px, 40px);
  ${sizes.aboveMobile} {
    width: 260px;
    transform: translate(220px, -80px);
  }
`;

export const IntroductionSection = () => {
  const handleButtonClick = () => {
    console.log("Open up the full page form overlay");
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
    </SectionContainer>
  );
};
