import styled from "styled-components";

import { text20, text56, text68 } from "../../../../styles/typography";
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
  ${text56}
  width: 100%;
  ${sizes.aboveMobile} {
    ${text68}
  }
`;

const Two = styled.span`
  grid-area: two;
  ${text56}
  width: 100%;
  ${sizes.aboveMobile} {
    ${text68}
  }
`;

const Three = styled.span`
  grid-area: three;
  ${text56}
  width: 100%;
  ${sizes.aboveMobile} {
    ${text68}
  }
`;

const TagLine = styled.p`
  ${text20}
  font-weight: 700;
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
