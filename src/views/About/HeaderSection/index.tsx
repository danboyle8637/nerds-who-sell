import styled from "styled-components";

import { smallHeadline } from "../../../styles/typography";

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
  height: 700px;
`;

const Headline = styled.h1`
  ${smallHeadline}
  align-self: end;
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  line-height: 1.8;
  transform: translateY(-60px);
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
