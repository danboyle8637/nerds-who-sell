import styled from "styled-components";

import { MobileLayout } from "./MobileLayout";
import { AboveMobileLayout } from "./AboveMobileLayout";
import { useMatchMedia } from "../../../hooks/componets/useMatchMedia";
import { Markdown } from "../../../types/pages";

interface AuthenticSectionProps {
  authenticCopy: Markdown;
}

const LayoutContainer = styled.section`
  padding: 0 12px;
  width: 100%;
  max-width: 800px;
`;

export const AuthenticSection: React.FC<AuthenticSectionProps> = ({
  authenticCopy,
}) => {
  const isAboveMobile = useMatchMedia();

  const activeLayout = isAboveMobile ? (
    <AboveMobileLayout
      headline={authenticCopy.frontmatter.headline as string}
      lead={authenticCopy.frontmatter.lead as string}
      bodyCopy={authenticCopy.code}
    />
  ) : (
    <MobileLayout
      headline={authenticCopy.frontmatter.headline as string}
      lead={authenticCopy.frontmatter.lead as string}
      bodyCopy={authenticCopy.code}
    />
  );

  return <LayoutContainer>{activeLayout}</LayoutContainer>;
};
