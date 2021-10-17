import styled from "styled-components";

import { smallHeadline } from "../../../styles/typography";
import { AboutMobile } from "../../../components/images/about/AboutMobile";
import { AboutTablet } from "../../../components/images/about/AboutTablet";
import { AboutLaptop } from "../../../components/images/about/AboutLaptop";
import { useMatchMedia } from "../../../hooks/componets/useMatchMedia";
import { sizes } from "../../../styles/sizes";

interface HeaderSectionProps {
  headline: string;
}

const SectionContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  justify-items: center;
  align-items: center;
  background-color: var(--section-background-5);
  border-radius: 0 0 40px 40px;
  width: 100%;
  max-width: 1440px;
  box-shadow: 0 0 0 6px hsla(0, 0%, 0%, 0.4);
  overflow: hidden;
`;

const BackgroundImage = styled.div`
  position: relative;
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  justify-self: end;
  align-self: center;
  width: 100%;
  line-height: 0;
`;

const Headline = styled.h1`
  ${smallHeadline}
  justify-self: start;
  align-self: start;
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  line-height: 1.8;
  width: 70%;
  transform: translate(20px, 60px);
  z-index: 1;
  ${sizes.aboveMobile} {
    justify-self: start;
    align-self: end;
    width: 70%;
    transform: translate(20px, -20px);
  }
  ${sizes.aboveTablet} {
    width: 60%;
    transform: translate(20px, -40px);
  }
  ${sizes.aboveIpadPro} {
    width: 60%;
    transform: translate(60px, -40px);
  }
`;

export const HeaderSection: React.FC<HeaderSectionProps> = ({ headline }) => {
  const isAboveMobile = useMatchMedia();
  const isAboveIpadPro = useMatchMedia(1100);

  const backgroundImage = isAboveIpadPro ? (
    <AboutLaptop />
  ) : isAboveMobile && !isAboveIpadPro ? (
    <AboutTablet />
  ) : (
    <AboutMobile />
  );

  return (
    <>
      <SectionContainer>
        <Headline>{headline}</Headline>
        <BackgroundImage>{backgroundImage}</BackgroundImage>
      </SectionContainer>
    </>
  );
};
