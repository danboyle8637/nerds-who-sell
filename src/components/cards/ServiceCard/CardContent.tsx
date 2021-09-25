import styled from "styled-components";

import { bodyText, smallHeadline } from "../../../styles/typography";
import { sizes } from "../../../styles/sizes";

interface CardContentProps {
  headline: string;
  description: string;
}

const Container = styled.div`
  padding: 24px 16px 16px 16px;
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;
  gap: 12px;
  justify-items: start;
  width: 100%;
`;

const Headline = styled.h3`
  ${smallHeadline}
  font-size: 2.4rem;
  ${sizes.aboveMobile} {
    font-size: 2.4rem;
  }
`;

const Description = styled.p`
  ${bodyText}
  line-height: 1.6;
`;

export const CardContent: React.FC<CardContentProps> = ({
  headline,
  description,
}) => {
  return (
    <Container>
      <Headline>{headline}</Headline>
      <Description>{description}</Description>
    </Container>
  );
};
