import styled from "styled-components";

import { MobileLayout } from "./MobileLayout";
import { AboveMobileLayout } from "./AboveMobileLayout";
import { useMatchMedia } from "../../../hooks/componets/useMatchMedia";
import { Markdown } from "../../../types/pages";

interface OverdeliverSectionProps {
  overdeliverCopy: Markdown;
}

const LayoutContainer = styled.section`
  padding: 0 12px;
  width: 100%;
  max-width: 800px;
`;

export const OverdeliverSection: React.FC<OverdeliverSectionProps> = ({
  overdeliverCopy,
}) => {
  const isAboveMobile = useMatchMedia();

  const activeLayout = isAboveMobile ? (
    <AboveMobileLayout
      headline={overdeliverCopy.frontmatter.headline as string}
      lead={overdeliverCopy.frontmatter.lead as string}
      bodyCopy={overdeliverCopy.code}
    />
  ) : (
    <MobileLayout
      headline={overdeliverCopy.frontmatter.headline as string}
      lead={overdeliverCopy.frontmatter.lead as string}
      bodyCopy={overdeliverCopy.code}
    />
  );

  return <LayoutContainer>{activeLayout}</LayoutContainer>;
};
