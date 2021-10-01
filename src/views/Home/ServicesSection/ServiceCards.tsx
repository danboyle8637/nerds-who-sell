import styled from "styled-components";

import { ServiceCard } from "../../../components/cards/ServiceCard";
import { useMatchMedia } from "../../../hooks/componets/useMatchMedia";
import { Markdown } from "../../../types/pages";
import { ServiceImage, ServiceType } from "../../../types/components";
import { sizes } from "../../../styles/sizes";

interface ServiceCardsProps {
  serviceType: ServiceType;
  service1: Markdown;
  service2: Markdown;
  service3: Markdown;
}

const ServiceCardsContainer = styled.div`
  padding-top: var(--section-padding);
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--cards-gap-mobile);
  justify-items: center;
  align-items: start;
  width: 100%;
  max-width: 1200px;
  ${sizes.aboveMobile} {
    grid-template-columns: 1fr 1fr;
    column-gap: 0px;
    row-gap: var(--cards-gap-tablet);
  }
  ${sizes.aboveTablet} {
    grid-template-columns: repeat(3, 1fr);
    row-gap: 0;
  }
  ${sizes.aboveIpadPro} {
    column-gap: 40px;
  }
`;

export const ServiceCards: React.FC<ServiceCardsProps> = ({
  serviceType,
  service1,
  service2,
  service3,
}) => {
  const service1ImageType = service1.frontmatter.imageType as ServiceImage;
  const service1Headline = service1.frontmatter.headline as string;

  const service2ImageType = service2.frontmatter.imageType as ServiceImage;
  const service2Headline = service2.frontmatter.headline as string;

  const service3ImageType = service3.frontmatter.imageType as ServiceImage;
  const service3Headline = service3.frontmatter.headline as string;

  const styles = {
    "--section-padding": serviceType === "web-dev" ? "140px" : "100px",
    "--row-gap": serviceType === "copywriting" ? "260px" : "200px",
    "--cards-gap-mobile": serviceType === "web-dev" ? "260px" : "200px",
    "--cards-gap-tablet": serviceType === "web-dev" ? "260px" : "200px",
  } as React.CSSProperties;

  return (
    <ServiceCardsContainer style={styles}>
      <ServiceCard
        imageType={service1ImageType}
        headline={service1Headline}
        description={service1.code}
      />
      <ServiceCard
        imageType={service2ImageType}
        headline={service2Headline}
        description={service2.code}
      />
      <ServiceCard
        imageType={service3ImageType}
        headline={service3Headline}
        description={service3.code}
      />
    </ServiceCardsContainer>
  );
};
