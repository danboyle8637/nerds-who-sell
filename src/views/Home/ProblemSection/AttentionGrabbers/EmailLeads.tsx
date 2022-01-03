import styled from "styled-components";

import { text24, text36 } from "../../../../styles/typography";
import { EmailLeads as Emails } from "../../../../components/images/EmailLeads";
import { sizes } from "../../../../styles/sizes";

const ContentContainer = styled.div`
  position: relative;
  justify-self: end;
  width: 300px;
  isolation: isolate;
  ${sizes.aboveMobile} {
    width: 500px;
  }
`;

const HeadlinePhoneContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr min-content;
  gap: 12px;
  justify-items: start;
  align-items: center;
`;

const Headline = styled.h3`
  ${text24}
  line-height: 1.5;
  ${sizes.aboveMobile} {
    ${text36}
  }
`;

const Phone = styled.div`
  width: fit-content;
`;

const Shadow = styled.div`
  position: absolute;
  top: 50%;
  right: 0;
  background-color: var(--section-background-5);
  filter: blur(20px);
  width: 160px;
  height: 160px;
  transform: translate(0, -50%);
  z-index: -1;
`;

export const EmailLeads = () => {
  return (
    <ContentContainer>
      <HeadlinePhoneContainer>
        <Headline>Getting Fresh Email Leads Every Week</Headline>
        <Phone>
          <Emails />
        </Phone>
      </HeadlinePhoneContainer>
      <Shadow />
    </ContentContainer>
  );
};
