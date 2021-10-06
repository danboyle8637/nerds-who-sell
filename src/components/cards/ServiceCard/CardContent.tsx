import styled from "styled-components";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";

import { Paragraph, Strong } from "../../mdx";
import { smallHeadline } from "../../../styles/typography";
import { sizes } from "../../../styles/sizes";

interface CardContentProps {
  headline: string;
  description: MDXRemoteSerializeResult<Record<string, unknown>>;
}

const components = {
  p: (props: any) => <Paragraph {...props} />,
  strong: (props: any) => <Strong {...props} />,
};

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
  return (
    <Container>
      <Headline>{headline}</Headline>
      <MDXRemote {...description} components={components} />
    </Container>
  );
};
