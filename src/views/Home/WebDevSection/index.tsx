import { useMemo } from "react";
import styled from "styled-components";
import { getMDXComponent } from "mdx-bundler/client";

import { Headline } from "./Headline";
import { sizes } from "../../../styles/sizes";
import { Head } from "next/document";

interface WebDevSectionProps {
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

export const WebDevSection: React.FC<WebDevSectionProps> = ({
  preHeadline,
  headline,
  bodyCopy,
}) => {
  const WebDevComponent = useMemo(() => getMDXComponent(bodyCopy), [bodyCopy]);

  return (
    <SectionContainer>
      <Headline preHeadline={preHeadline} headline={headline} />
    </SectionContainer>
  );
};
