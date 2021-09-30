import styled from "styled-components";

import { smallHeadline, largeHeadline } from "../../../../styles/typography";
import { ConversationWordBubbles } from "../../../../components/images/ConversationBubbles";

interface HeaderProps {
  preHeadline: string;
  headline: string;
}

const HeaderContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 800px;
`;

const ConversationImage = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  width: 360px;
  transform: translate(-50%, -240px);
`;

const HeadlineContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;
  gap: 6px;
  justify-items: start;
`;

const PreHeadline = styled.h3`
  ${smallHeadline}
  padding-left: 60px;
  color: var(--accent-1);
`;

const MainHeadline = styled.h3`
  ${largeHeadline}
`;

export const Header: React.FC<HeaderProps> = ({ preHeadline, headline }) => {
  return (
    <HeaderContainer>
      <ConversationImage>
        <ConversationWordBubbles />
      </ConversationImage>
      <HeadlineContainer>
        <PreHeadline>{preHeadline}</PreHeadline>
        <MainHeadline>{headline}</MainHeadline>
      </HeadlineContainer>
    </HeaderContainer>
  );
};
