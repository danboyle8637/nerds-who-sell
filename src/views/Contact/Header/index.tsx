import styled from "styled-components";

import { largeHeadline } from "../../../styles/typography";
import { WordBubble } from "./WordBubble";
import { sizes } from "../../../styles/sizes";

const HeaderContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;
  gap: 2px;
  justify-items: center;
  align-items: center;
  width: 100%;
  ${sizes.aboveMobile} {
  }
`;

const Headline = styled.h1`
  ${largeHeadline}
`;

const WordBubbleContainer = styled.div`
  width: 100px;
`;

export const Header = () => {
  return (
    <HeaderContainer>
      <WordBubbleContainer>
        <WordBubble />
      </WordBubbleContainer>
      <Headline>Contact Us</Headline>
    </HeaderContainer>
  );
};
