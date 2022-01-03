import styled from "styled-components";

import { text24, text36 } from "../../../../styles/typography";
import { PhoneRing } from "./PhoneRing";
import { EmailLeads } from "./EmailLeads";
import { DailySales } from "./DailySales";
import { sizes } from "../../../../styles/sizes";

const SectionContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;
  gap: 140px;
  justify-items: center;
  width: fit-content;
`;

const Headline = styled.h3`
  ${text24}
  ${sizes.aboveMobile} {
    ${text36}
  }
`;

export const AttentionGrabbers = () => {
  return (
    <SectionContainer>
      <Headline>Your website should be...</Headline>
      <PhoneRing />
      <EmailLeads />
      <DailySales />
    </SectionContainer>
  );
};
