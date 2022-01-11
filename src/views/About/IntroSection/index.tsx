import styled from "styled-components";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";

import {
  PostLink,
  Paragraph,
  Strong,
  List,
  ListItem,
} from "../../../components/mdx";
import { sizes } from "../../../styles/sizes";

const components = {
  p: (props: any) => <Paragraph {...props} />,
  PostLink,
  a: (props: any) => <PostLink {...props} />,
  strong: (props: any) => <Strong {...props} />,
  ul: (props: any) => <List type="ul" {...props} />,
  ol: (props: any) => <List type="ol" {...props} />,
  li: (props: any) => <ListItem {...props} />,
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
  ${sizes.aboveMobile} {
    width: 660px;
  }
`;

export const IntroSection: React.FC<IntroSectionProps> = ({ bodyCopy }) => {
  return (
    <SectionContainer>
      <MDXRemote {...bodyCopy} components={components} />
    </SectionContainer>
  );
};
