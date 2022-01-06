import styled from "styled-components";

import { HeaderSection } from "./HeaderSection";
import { ProblemSection } from "./ProblemSection";
import { IntroductionSection } from "./IntroductionSection";
import { ServicesSection } from "./ServicesSection";
import { CallToActionSection } from "./CallToActionSection";
import { Markdown, Services } from "../../types/pages";

interface HomeViewProps {
  webDevContent: Markdown;
  webDevServices: Services;
  copywritingContent: Markdown;
  copywritingServices: Services;
  ctaContent: Markdown;
}

const ViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 120px;
  width: 100%;
`;

export const HomeView: React.FC<HomeViewProps> = ({
  webDevContent,
  webDevServices,
  copywritingContent,
  copywritingServices,
  ctaContent,
}) => {
  const { service1, service2, service3 } = webDevServices;

  return (
    <ViewContainer>
      <HeaderSection />
      <ProblemSection />
      <IntroductionSection />
      <ServicesSection
        serviceType="web-dev"
        preHeadline={webDevContent.frontmatter.preHeadline as string}
        headline={webDevContent.frontmatter.headline as string}
        bodyCopy={webDevContent.code}
        service1={service1}
        service2={service2}
        service3={service3}
      />
      <ServicesSection
        serviceType="copywriting"
        preHeadline={copywritingContent.frontmatter.preHeadline as string}
        headline={copywritingContent.frontmatter.headline as string}
        bodyCopy={copywritingContent.code}
        service1={copywritingServices.service1}
        service2={copywritingServices.service2}
        service3={copywritingServices.service3}
      />
      <CallToActionSection
        preHeadline={ctaContent.frontmatter.preHeadline as string}
        headline={ctaContent.frontmatter.headline as string}
        bodyCopy={ctaContent.code}
      />
    </ViewContainer>
  );
};
