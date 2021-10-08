import styled from "styled-components";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";

import {
  Paragraph,
  Strong,
  InternalLink,
  List,
  ListItem,
} from "../../components/mdx";
import { largeHeadline } from "../../styles/typography";
import { sizes } from "../../styles/sizes";

const components = {
  p: (props: any) => <Paragraph {...props} />,
  InternalLink,
  a: (props: any) => <InternalLink {...props} />,
  strong: (props: any) => <Strong {...props} />,
  ul: (props: any) => <List type="ul" {...props} />,
  li: (props: any) => <ListItem {...props} />,
};

interface PrivacyViewProps {
  headline: string;
  bodyCopy: MDXRemoteSerializeResult<Record<string, unknown>>;
}

const ViewContainer = styled.section`
  padding: 80px 12px;
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;
  gap: 40px;
  width: 100%;
  max-width: 800px;
  ${sizes.aboveMobile} {
    padding: 120px 26px;
  }
  ${sizes.aboveTablet} {
    padding: 120px 0;
  }
`;

const Headline = styled.h1`
  ${largeHeadline}
`;

export const PrivacyView: React.FC<PrivacyViewProps> = ({
  headline,
  bodyCopy,
}) => {
  return (
    <ViewContainer>
      <Headline>{headline}</Headline>
      <MDXRemote {...bodyCopy} components={components} />
    </ViewContainer>
  );
};
