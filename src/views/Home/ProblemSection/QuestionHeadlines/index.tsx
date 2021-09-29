import styled from "styled-components";

import { smallHeadline } from "../../../../styles/typography";

const HeadlineContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;
  gap: 60px;
  justify-items: center;
  width: 100%;
`;

const Headline = styled.h3`
  ${smallHeadline}
  line-height: 1.6;
`;

export const QuestionHeadlines = () => {
  return (
    <HeadlineContainer>
      <Headline>
        If you feel like your website is ugly... slow... and can't be found...
      </Headline>
      <Headline>
        If you're business is new and you want to make an impact online...
      </Headline>
      <Headline>
        Or if you know your website isn't performing or selling...
      </Headline>
    </HeadlineContainer>
  );
};
