import styled from "styled-components";

import { smallHeadline } from "../../../styles/typography";
import { sizes } from "../../../styles/sizes";

interface HeaderSectionProps {
  headline: string;
}

const SectionContainer = styled.section`
  padding: 0 12px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  justify-items: center;
  align-items: center;
  background-color: var(--section-background-5);
  width: 100%;
  max-width: 1440px;
  height: 700px;
  ${sizes.aboveMobile} {
    padding: 0;
  }
`;

const Headline = styled.h1`
  ${smallHeadline}
  align-self: end;
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  line-height: 1.8;
  transform: translateY(-60px);
  ${sizes.aboveMobile} {
    justify-self: start;
    width: 90%;
    transform: translate(40px, -60px);
  }
  ${sizes.aboveTablet} {
    width: 70%;
  }
  ${sizes.aboveIpadPro} {
    width: 60%;
  }
`;

export const HeaderSection: React.FC<HeaderSectionProps> = ({ headline }) => {
  return (
    <>
      <SectionContainer>
        <Headline>{headline}</Headline>
      </SectionContainer>
    </>
  );
};
