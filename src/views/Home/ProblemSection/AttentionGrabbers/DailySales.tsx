import styled from "styled-components";

import { text24, text36 } from "../../../../styles/typography";
import { BuyNowButton } from "../../../../components/images/BuyNowButton";
import { sizes } from "../../../../styles/sizes";

const ContentContainer = styled.div`
  position: relative;
  width: 300px;
  isolation: isolate;
  ${sizes.aboveMobile} {
    width: 500px;
  }
`;

const HeadlinePhoneContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;
  gap: 12px;
  justify-items: center;
`;

const Headline = styled.h3`
  ${text24}
  line-height: 1.5;
  ${sizes.aboveMobile} {
    ${text36}
  }
`;

const Button = styled.div`
  width: 240px;
  ${sizes.aboveMobile} {
    width: 260px;
  }
  ${sizes.aboveIpadPro} {
    width: 300px;
  }
`;

const Shadow = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  background-color: var(--section-background-5);
  filter: blur(20px);
  width: 160px;
  height: 160px;
  transform: translate(-50%, 0);
  z-index: -1;
`;

export const DailySales = () => {
  return (
    <ContentContainer>
      <HeadlinePhoneContainer>
        <Button>
          <BuyNowButton />
        </Button>
        <Headline>Making Daily Sales!</Headline>
      </HeadlinePhoneContainer>
      <Shadow />
    </ContentContainer>
  );
};
