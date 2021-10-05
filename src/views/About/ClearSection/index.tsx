import styled from "styled-components";

import { MobileLayout } from "./MobileLayout";
import { AboveMobileLayout } from "./AboveMobileLayout";
import { useMatchMedia } from "../../../hooks/componets/useMatchMedia";
import { Markdown } from "../../../types/pages";

interface AuthenticSectionProps {
  clearCopy: Markdown;
}

const LayoutContainer = styled.section`
  padding: 0 12px;
  width: 100%;
  max-width: 1000px;
`;

export const ClearSection: React.FC<AuthenticSectionProps> = ({
  clearCopy,
}) => {
  const isAboveMobile = useMatchMedia();

  const activeLayout = isAboveMobile ? (
    <AboveMobileLayout
      headline={clearCopy.frontmatter.headline as string}
      lead={clearCopy.frontmatter.lead as string}
      bodyCopy={clearCopy.code}
    />
  ) : (
    <MobileLayout
      headline={clearCopy.frontmatter.headline as string}
      lead={clearCopy.frontmatter.lead as string}
      bodyCopy={clearCopy.code}
    />
  );

  return <LayoutContainer>{activeLayout}</LayoutContainer>;
};
