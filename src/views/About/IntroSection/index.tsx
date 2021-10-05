import React from "react";
import styled from "styled-components";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";

import {
  InternalLink,
  Paragraph,
  Strong,
  List,
  ListItem,
  Code,
} from "../../../components/mdx";
import { sizes } from "../../../styles/sizes";

const components = {
  Paragraph,
  p: (props: any) => <Paragraph {...props} />,
  InternalLink,
  a: (props: any) => <InternalLink {...props} />,
  strong: (props: any) => <Strong {...props} />,
  List,
  ul: (props: any) => <List type="ul" {...props} />,
  ol: (props: any) => <List type="ol" {...props} />,
  ListItem,
  li: (props: any) => <ListItem {...props} />,
  Code,
  code: (props: any) => <Code language="tsx" {...props} />,
};

interface IntroSectionProps {
  bodyCopy: MDXRemoteSerializeResult<Record<string, unknown>>;
}

const SectionContainer = styled.section`
  padding: 0 12px;
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;
  gap: 20px;
  width: 100%;
`;

export const IntroSection: React.FC<IntroSectionProps> = ({ bodyCopy }) => {
  return (
    <SectionContainer>
      <MDXRemote {...bodyCopy} components={components} />
    </SectionContainer>
  );
};
