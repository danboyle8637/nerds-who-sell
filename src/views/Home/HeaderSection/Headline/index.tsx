import styled from "styled-components";

import { largeHeadline } from "../../../../styles/typography";
import { bodyText } from "../../../../styles/typography";
import { sizes } from "../../../../styles/sizes";

const HeadlineContainer = styled.div`
  align-self: flex-start;
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;
  gap: 20px;
  width: 80%;
  ${sizes.aboveTablet} {
    width: 100%;
  }
  ${sizes.aboveIpadPro} {
    align-self: center;
    gap: 0;
    width: fit-content;
  }
`;

const MainHeadline = styled.h1`
  display: grid;
  grid-template-areas:
    "one"
    "two"
    "three";
  gap: 6px;
  ${largeHeadline}
  width: 100%;
  ${sizes.aboveMobile} {
    grid-template-areas:
      "one two"
      "three three";
  }
  ${sizes.aboveTablet} {
    grid-template-areas: "one two three";
    gap: 20px;
    width: fit-content;
  }
`;

const One = styled.span`
  grid-area: one;
  width: 100%;
`;

const Two = styled.span`
  grid-area: two;
  width: 100%;
`;

const Three = styled.span`
  grid-area: three;
  width: 100%;
`;

const TagLine = styled.p`
  ${bodyText}
  width: 100%;
  line-height: 1.6;
`;

export const Headline = () => {
  return (
    <HeadlineContainer>
      <MainHeadline>
        <One>Affordable</One>
        <Two>Websites</Two>
        <Three>that Sell!</Three>
      </MainHeadline>
      <TagLine>Is Your Website Bringing In New Leads Every Week?</TagLine>
    </HeadlineContainer>
  );
};
