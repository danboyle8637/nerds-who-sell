import styled from "styled-components";

import { HeaderSection } from "./HeaderSection";
import { ProblemSection } from "./ProblemSection";
import { IntroductionSection } from "./IntroductionSection";
import { WebDevSection } from "./WebDevSection";

interface HomeViewProps {
  webDevPreHeadline: string;
  webDevHeadline: string;
  webDevBodyCopy: string;
}

const ViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 120px;
`;

export const HomeView: React.FC<HomeViewProps> = ({
  webDevPreHeadline,
  webDevHeadline,
  webDevBodyCopy,
}) => {
  return (
    <ViewContainer>
      <HeaderSection />
      <ProblemSection />
      <IntroductionSection />
      <WebDevSection
        preHeadline={webDevPreHeadline}
        headline={webDevHeadline}
        bodyCopy={webDevBodyCopy}
      />
    </ViewContainer>
  );
};
