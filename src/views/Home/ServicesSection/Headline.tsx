import styled from "styled-components";

import { smallHeadline, largeHeadline } from "../../../styles/typography";
import { sizes } from "../../../styles/sizes";

interface HeadlineProps {
  preHeadline: string;
  headline: string;
}

const HeadlineContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;
  gap: 0px;
  justify-items: start;
  width: 100%;
`;

const PreHeadline = styled.h3`
  ${smallHeadline}
  padding-left: 30px;
  color: var(--accent-1);
  ${sizes.aboveMobile} {
    padding-left: 60px;
  }
`;

const MainHeadline = styled.h3`
  ${largeHeadline}
`;

export const Headline: React.FC<HeadlineProps> = ({
  preHeadline,
  headline,
}) => {
  return (
    <HeadlineContainer>
      <PreHeadline>{preHeadline}</PreHeadline>
      <MainHeadline>{headline}</MainHeadline>
    </HeadlineContainer>
  );
};
