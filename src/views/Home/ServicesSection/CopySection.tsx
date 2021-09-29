import { useMemo } from "react";
import styled from "styled-components";
import { getMDXComponent } from "mdx-bundler/client";

import { Headline } from "./Headline";
import { Paragraph, Strong } from "../../../components/mdx";
import { sizes } from "../../../styles/sizes";

interface CopySectionProps {
  preHeadline: string;
  headline: string;
  bodyCopy: string;
}

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
`;

export const CopySection: React.FC<CopySectionProps> = ({
  preHeadline,
  headline,
  bodyCopy,
}) => {
  const WebDevComponent = useMemo(() => getMDXComponent(bodyCopy), [bodyCopy]);

  return (
    <SectionContainer>
      <Headline preHeadline={preHeadline} headline={headline} />
      <ContentContainer>
        <WebDevComponent components={{ p: Paragraph, strong: Strong }} />
      </ContentContainer>
    </SectionContainer>
  );
};
