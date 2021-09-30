import React, { useMemo } from "react";
import styled from "styled-components";
import { getMDXComponent } from "mdx-bundler/client";

import { Paragraph, Strong } from "../../../components/mdx";

interface CopySectionProps {
  bodyCopy: string;
}

const ContentContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;
  gap: 26px;
  justify-items: start;
  width: 100%;
  max-width: 800px;
`;

export const CopySection: React.FC<CopySectionProps> = ({ bodyCopy }) => {
  const CTAComponent = useMemo(() => getMDXComponent(bodyCopy), [bodyCopy]);

  return (
    <ContentContainer>
      <CTAComponent components={{ p: Paragraph, strong: Strong }} />
    </ContentContainer>
  );
};
