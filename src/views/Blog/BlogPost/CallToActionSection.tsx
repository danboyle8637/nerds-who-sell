import { useMemo } from "react";
import styled from "styled-components";

import { ActionButton } from "../../../components/buttons/ActionButton";
import { NerdsWhoRockLaptops } from "../../../components/images/NerdsWhoRockLaptops";
import { NerdWhoSells } from "../../../components/images/NerdWhoSells";
import { largeHeadline } from "../../../styles/typography";
import { BlogCategory } from "../../../types/blog";
import { nerdsWhoSellStore } from "../../../../lib/store";
import { sizes } from "../../../styles/sizes";

interface CallToActionSectionProps {
  type: BlogCategory;
}

const SectionContainer = styled.div`
  padding: 40px 12px 160px 12px;
  display: flex;
  justify-content: center;
  background-color: var(--section-background-5);
  width: 100%;
  ${sizes.aboveIphone11Pro} {
    padding: 40px 12px 140px 12px;
  }
`;

const ContentContainer = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;
  justify-items: center;
  align-items: center;
  gap: 40px;
  width: 100%;
  max-width: 1600px;
`;

const NerdSpacer = styled.div`
  width: 240px;
  ${sizes.aboveTablet} {
    width: 200px;
  }
`;

const TheNerd = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  width: 180px;
  transform: translate(-50%, -80px);
  ${sizes.aboveMobile} {
    top: unset;
    bottom: 0;
    left: 0;
    width: 280px;
    transform: translate(-70px, 150px);
  }
  ${sizes.aboveTablet} {
    width: 320px;
  }
  ${sizes.aboveIpadPro} {
    transform: translate(170px, 150px);
  }
  ${sizes.aboveLaptop} {
    width: 260px;
    transform: translate(270px, 150px);
  }
`;

const Headline = styled.h3`
  ${largeHeadline}
  font-size: 3rem;
  text-align: center;
  line-height: 1.5;
`;

export const CallToActionSection: React.FC<CallToActionSectionProps> = ({
  type,
}) => {
  const toggleQuizOverlay = nerdsWhoSellStore(
    (state) => state.toggleQuizOverlay
  );

  const handleOpenDiscoveryQuiz = () => {
    toggleQuizOverlay();
  };

  const renderNerd = useMemo(() => {
    switch (type) {
      case "coding": {
        return <NerdsWhoRockLaptops />;
      }
      case "conversion": {
        return <NerdWhoSells />;
      }
      case "marketing": {
        return <NerdWhoSells />;
      }
      case "portfolio": {
        return <NerdsWhoRockLaptops />;
      }
      case "web-design": {
        return <NerdsWhoRockLaptops />;
      }
      default: {
        throw new Error(
          "You don't have a nerd for this blog post category. Fix it!"
        );
      }
    }
  }, [type]);

  const renderHeadline = useMemo(() => {
    switch (type) {
      case "coding": {
        return "Ready for a Blazing Fast Website That Sells?";
      }
      case "conversion": {
        return "Ready for Conversions? Let's Do This!";
      }
      case "marketing": {
        return "Ready for Conversions? Let's Do This!";
      }
      case "portfolio": {
        return "Ready for a Blazing Fast Website That Sells?";
      }
      case "web-design": {
        return "Ready for a Blazing Fast Website That Sells?";
      }
      default: {
        throw new Error(
          "You don't have a nerd for this blog post category. Fix it!"
        );
      }
    }
  }, [type]);

  return (
    <SectionContainer>
      <ContentContainer>
        <TheNerd>{renderNerd}</TheNerd>
        <NerdSpacer />
        <Headline>{renderHeadline}</Headline>
        <ActionButton handleClick={handleOpenDiscoveryQuiz}>
          Let's Setup a Chat!
        </ActionButton>
      </ContentContainer>
    </SectionContainer>
  );
};
