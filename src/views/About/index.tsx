import styled from "styled-components";

import { HeaderSection } from "./HeaderSection";
import { IntroSection } from "./IntroSection";
import { AuthenticSection } from "./AuthenticSection";
import { ClearSection } from "./ClearSection";
import { OverdeliverSection } from "./OverdeliverSection";
import { CallToActionSection } from "../Home/CallToActionSection";
import { Markdown } from "../../types/pages";
import { sizes } from "../../styles/sizes";

interface AboutViewProps {
  headerHeadline: string;
  introBodyCopy: Markdown;
  authenticCopy: Markdown;
  clearCopy: Markdown;
  overdeliverCopy: Markdown;
  ctaCopy: Markdown;
}

const ViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const SectionsContainer = styled.div`
  padding: 80px 0;
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;
  gap: 120px;
  justify-items: center;
  width: 100%;
  ${sizes.aboveMobile} {
    padding: 120px 0;
  }
`;

export const AboutView: React.FC<AboutViewProps> = ({
  headerHeadline,
  introBodyCopy,
  authenticCopy,
  clearCopy,
  overdeliverCopy,
  ctaCopy,
}) => {
  return (
    <ViewContainer>
      <HeaderSection headline={headerHeadline} />
      <SectionsContainer>
        <IntroSection bodyCopy={introBodyCopy.code} />
        <AuthenticSection authenticCopy={authenticCopy} />
        <ClearSection clearCopy={clearCopy} />
        <OverdeliverSection overdeliverCopy={overdeliverCopy} />
      </SectionsContainer>
      <CallToActionSection
        preHeadline={ctaCopy.frontmatter.preHeadline as string}
        headline={ctaCopy.frontmatter.headline as string}
        bodyCopy={ctaCopy.code}
      />
    </ViewContainer>
  );
};
