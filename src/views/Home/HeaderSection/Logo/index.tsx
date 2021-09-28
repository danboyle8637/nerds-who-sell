import styled from "styled-components";

import { smallHeadline } from "../../../../styles/typography";
import { NerdsWhoRockLaptops } from "../../../../components/images/NerdsWhoRockLaptops";
import { NerdsLogo } from "../../../../components/images/NerdsLogo";
import { WhoLogo } from "../../../../components/images/WhoLogo";
import { SellLogo } from "../../../../components/images/SellLogo";

const LogoContainer = styled.div`
  align-self: flex-start;
  position: relative;
  width: 250px;
  transform: translateX(-10px);
`;

const HeadlineContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  display: grid;
  grid-template-areas:
    "nerds nerds"
    "who sell";
  gap: 0px;
  width: 130px;
  transform: translate(10px, 22px);
`;

const Nerds = styled.div`
  grid-area: nerds;
  padding-left: 12px;
  width: 130px;
`;

const Who = styled.div`
  grid-area: who;
  width: 80px;
`;

const Sell = styled.div`
  grid-area: sell;
  width: 72px;
`;

const TheNerd = styled.div`
  width: 142px;
`;

export const Logo = () => {
  return (
    <LogoContainer>
      <TheNerd>
        <NerdsWhoRockLaptops />
      </TheNerd>
      <HeadlineContainer>
        <Nerds>
          <NerdsLogo />
        </Nerds>
        <Who>
          <WhoLogo />
        </Who>
        <Sell>
          <SellLogo />
        </Sell>
      </HeadlineContainer>
    </LogoContainer>
  );
};
