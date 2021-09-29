import styled from "styled-components";

import { CopySection } from "./CopySection";
import { ServiceCards } from "./ServiceCards";
import { ServiceCallToAction } from "./ServiceCallToAction";
import { Markdown } from "../../../types/pages";
import { ServiceType } from "../../../types/components";

interface WebDevSectionProps {
  serviceType: ServiceType;
  preHeadline: string;
  headline: string;
  bodyCopy: string;
  service1: Markdown;
  service2: Markdown;
  service3: Markdown;
}

const SectionContainar = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;
  gap: 0px;
  justify-items: center;
  width: 100%;
`;

export const ServicesSection: React.FC<WebDevSectionProps> = ({
  serviceType,
  preHeadline,
  headline,
  bodyCopy,
  service1,
  service2,
  service3,
}) => {
  return (
    <SectionContainar>
      <CopySection
        preHeadline={preHeadline}
        headline={headline}
        bodyCopy={bodyCopy}
      />
      <ServiceCards
        serviceType={serviceType}
        service1={service1}
        service2={service2}
        service3={service3}
      />
      <ServiceCallToAction
        cta="Set up and talk and let's get online tech working for your business."
        buttonText="Let's Talk Web Tech!"
      />
    </SectionContainar>
  );
};
