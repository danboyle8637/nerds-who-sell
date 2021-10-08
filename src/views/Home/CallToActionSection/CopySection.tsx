import styled from "styled-components";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";

import { Paragraph, Strong } from "../../../components/mdx";
import { sizes } from "../../../styles/sizes";

interface CopySectionProps {
  bodyCopy: MDXRemoteSerializeResult<Record<string, unknown>>;
}

const components = {
  p: (props: any) => <Paragraph {...props} />,
  strong: (props: any) => <Strong {...props} />,
};

const ContentContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;
  gap: 26px;
  justify-items: start;
  width: 100%;
  max-width: 800px;
  ${sizes.aboveMobile} {
    justify-self: center;
    width: 600px;
  }
  ${sizes.aboveTablet} {
    padding: 0 24px;
    justify-self: start;
    width: 100%;
  }
`;

export const CopySection: React.FC<CopySectionProps> = ({ bodyCopy }) => {
  return (
    <ContentContainer>
      <MDXRemote {...bodyCopy} components={components} />
    </ContentContainer>
  );
};
