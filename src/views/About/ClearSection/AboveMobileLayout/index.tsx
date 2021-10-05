import styled from "styled-components";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";

import { ClearNerds } from "../../../../components/images/ClearNerds";
import { bodyText, smallHeadline } from "../../../../styles/typography";
import { Paragraph, Strong } from "../../../../components/mdx";
import { sizes } from "../../../../styles/sizes";

interface AboveMobileLayoutProps {
  headline: string;
  lead: string;
  bodyCopy: MDXRemoteSerializeResult<Record<string, unknown>>;
}

const components = {
  p: (props: any) => <Paragraph {...props} />,
  strong: (props: any) => <Strong {...props} />,
};

const SectionContainer = styled.div`
  display: grid;
  grid-template-columns: min-content 1fr;
  gap: 20px;
  justify-items: start;
  align-items: center;
  width: 100%;
`;

const TheNerd = styled.div`
  width: max-content;
`;

const ContentContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;
  gap: 20px;
  justify-items: start;
  width: 100%;
`;

const Headline = styled.h3`
  ${smallHeadline}
  font-size: 3.8rem;
`;

const Lead = styled.p`
  ${bodyText}
  line-height: 1.6;
`;

export const AboveMobileLayout: React.FC<AboveMobileLayoutProps> = ({
  headline,
  lead,
  bodyCopy,
}) => {
  return (
    <SectionContainer>
      <TheNerd>
        <ClearNerds />
      </TheNerd>
      <ContentContainer>
        <Headline>{headline}</Headline>
        <Lead>{lead}</Lead>
        <MDXRemote {...bodyCopy} components={components} />
      </ContentContainer>
    </SectionContainer>
  );
};
