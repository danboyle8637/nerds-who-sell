import styled from "styled-components";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";

import { Headline } from "./Headline";
import { Paragraph, Strong } from "../../../components/mdx";
import { sizes } from "../../../styles/sizes";

interface CopySectionProps {
  preHeadline: string;
  headline: string;
  bodyCopy: MDXRemoteSerializeResult<Record<string, unknown>>;
}

const components = {
  p: (props: any) => <Paragraph {...props} />,
  strong: (props: any) => <Strong {...props} />,
};

const SectionContainer = styled.section`
  padding: 0 12px;
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;
  gap: 40px;
  width: 100%;
  max-width: 800px;
`;

const ContentContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;
  gap: 26px;
  justify-items: start;
  width: 100%;
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

export const CopySection: React.FC<CopySectionProps> = ({
  preHeadline,
  headline,
  bodyCopy,
}) => {
  return (
    <SectionContainer>
      <Headline preHeadline={preHeadline} headline={headline} />
      <ContentContainer>
        <MDXRemote {...bodyCopy} components={components} />
      </ContentContainer>
    </SectionContainer>
  );
};
