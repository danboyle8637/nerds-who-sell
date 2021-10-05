import styled from "styled-components";

import { ClearNerds } from "../../../../components/images/ClearNerds";
import { smallHeadline, bodyText } from "../../../../styles/typography";
import { sizes } from "../../../../styles/sizes";

interface SectionHeaderProps {
  headline: string;
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

const HeadlineContainer = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;
  gap: 20px;
  width: 200px;
  transform: translateY(-40px);
  ${sizes.aboveIphone11Pro} {
    width: 240px;
  }
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
        <ClearNerds />
      </TheNerd>
      <HeadlineContainer>
        <Headline>{headline}</Headline>
        <Paragraph>{lead}</Paragraph>
      </HeadlineContainer>
    </HeaderContainer>
  );
};
