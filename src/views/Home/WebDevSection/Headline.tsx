import styled from "styled-components";

import { smallHeadline, largeHeadline } from "../../../styles/typography";

interface HeadlineProps {
  preHeadline: string;
  headline: string;
}

const HeadlineContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;
  gap: 8px;
  justify-items: start;
  width: 100%;
`;

const PreHeadline = styled.h3`
  ${smallHeadline}
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
