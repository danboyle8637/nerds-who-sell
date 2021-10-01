import styled from "styled-components";

import { smallHeadline } from "../../../../styles/typography";
import { PhoneCallsCard } from "../../../../components/attentionGrabbers/PhoneCallQuestionCard";
import { GetLeadsCard } from "../../../../components/attentionGrabbers/GetLeadsQuestionCard";
import { BuyNowCard } from "../../../../components/attentionGrabbers/BuyNowQuestionCard";

const SectionContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;
  gap: 140px;
  justify-items: center;
  width: fit-content;
`;

const Headline = styled.h3`
  ${smallHeadline}
`;

export const AttentionGrabbers = () => {
  return (
    <SectionContainer>
      <Headline>Is your website...</Headline>
      <PhoneCallsCard />
      <GetLeadsCard />
      <BuyNowCard />
    </SectionContainer>
  );
};
