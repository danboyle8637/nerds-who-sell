import styled from "styled-components";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";

import { SectionHeader } from "./SectionHeader";
import { Paragraph, Strong } from "../../../../components/mdx";

const components = {
  p: (props: any) => <Paragraph {...props} />,
  strong: (props: any) => <Strong {...props} />,
};

interface MobileLayoutProps {
  headline: string;
  lead: string;
  bodyCopy: MDXRemoteSerializeResult<Record<string, unknown>>;
}

const SectionContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;
  gap: 20px;
  width: 100%;
`;

export const MobileLayout: React.FC<MobileLayoutProps> = ({
  headline,
  lead,
  bodyCopy,
}) => {
  return (
    <SectionContainer>
      <SectionHeader headline={headline} lead={lead} />
      <MDXRemote {...bodyCopy} components={components} />
    </SectionContainer>
  );
};
