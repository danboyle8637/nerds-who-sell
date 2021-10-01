import { useMemo } from "react";
import styled from "styled-components";
import { getMDXComponent } from "mdx-bundler/client";

import { Paragraph } from "../../mdx/Paragraph";
import { smallHeadline } from "../../../styles/typography";
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
  pointer-events: none;
`;

const Headline = styled.h3`
  ${smallHeadline}
  font-size: 2.4rem;
  ${sizes.aboveMobile} {
    font-size: 2.4rem;
  }
`;

export const CardContent: React.FC<CardContentProps> = ({
  headline,
  description,
}) => {
  const Description = useMemo(
    () => getMDXComponent(description),
    [description]
  );

  return (
    <Container>
      <Headline>{headline}</Headline>
      <Description components={{ p: Paragraph }} />
    </Container>
  );
};
