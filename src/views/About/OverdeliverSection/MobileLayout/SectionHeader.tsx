import styled from "styled-components";

import { OverdeliverNerds } from "../../../../components/images/OverdeliverNerds";
import { bodyText } from "../../../../styles/typography";

interface SectionHeaderProps {
  lead: string;
}

const HeaderContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: start;
  width: 100%;
`;

const TheNerd = styled.div`
  width: max-content;
`;

const LeadContainer = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;
  gap: 20px;
  width: 234px;
  transform: translateY(-36px);
`;

const Paragraph = styled.p`
  ${bodyText}
  line-height: 1.6;
`;

export const SectionHeader: React.FC<SectionHeaderProps> = ({ lead }) => {
  return (
    <HeaderContainer>
      <TheNerd>
        <OverdeliverNerds />
      </TheNerd>
      <LeadContainer>
        <Paragraph>{lead}</Paragraph>
      </LeadContainer>
    </HeaderContainer>
  );
};
