import styled from "styled-components";

import { AuthenticNerds } from "../../../../components/images/AuthenticNerds";
import { smallHeadline, bodyText } from "../../../../styles/typography";

interface SectionHeaderProps {
  headline: string;
  lead: string;
}

const HeaderContainer = styled.div`
  display: grid;
  grid-template-columns: min-content 1fr;
  gap: 6px;
  justify-items: start;
  align-items: center;
  width: 100%;
`;

const TheNerd = styled.div`
  width: max-content;
`;

const HeadlineContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;
  gap: 20px;
  width: fit-content;
`;

const Headline = styled.h3`
  ${smallHeadline}
  font-size: 3.6rem;
`;

const Paragraph = styled.p`
  ${bodyText}
  line-height: 1.6;
`;

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  headline,
  lead,
}) => {
  return (
    <HeaderContainer>
      <TheNerd>
        <AuthenticNerds />
      </TheNerd>
      <HeadlineContainer>
        <Headline>{headline}</Headline>
        <Paragraph>{lead}</Paragraph>
      </HeadlineContainer>
    </HeaderContainer>
  );
};
