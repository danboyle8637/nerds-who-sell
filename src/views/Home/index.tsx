import styled from "styled-components";

import { HeaderSection } from "./HeaderSection";
import { ProblemSection } from "./ProblemSection";
import { IntroductionSection } from "./IntroductionSection";
import { ServicesSection } from "./ServicesSection";
import { Markdown } from "../../types/pages";

interface HomeViewProps {
  webDevPreHeadline: string;
  webDevHeadline: string;
  webDevBodyCopy: string;
  webDevService1: Markdown;
  webDevService2: Markdown;
  webDevService3: Markdown;
  copywritingPreHeadline: string;
  copywritingHeadline: string;
  copywritingBodyCopy: string;
  copywritingService1: Markdown;
  copywritingService2: Markdown;
  copywritingService3: Markdown;
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
  webDevService1,
  webDevService2,
  webDevService3,
  copywritingPreHeadline,
  copywritingHeadline,
  copywritingBodyCopy,
  copywritingService1,
  copywritingService2,
  copywritingService3,
}) => {
  return (
    <ViewContainer>
      <HeaderSection />
      <ProblemSection />
      <IntroductionSection />
      <ServicesSection
        serviceType="web-dev"
        preHeadline={webDevPreHeadline}
        headline={webDevHeadline}
        bodyCopy={webDevBodyCopy}
        service1={webDevService1}
        service2={webDevService2}
        service3={webDevService3}
      />
      <ServicesSection
        serviceType="copywriting"
        preHeadline={copywritingPreHeadline}
        headline={copywritingHeadline}
        bodyCopy={copywritingBodyCopy}
        service1={copywritingService1}
        service2={copywritingService2}
        service3={copywritingService3}
      />
    </ViewContainer>
  );
};
