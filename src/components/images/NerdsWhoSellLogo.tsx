import styled from "styled-components";

import { NerdsLogo } from "./NerdsLogo";
import { WhoLogo } from "./WhoLogo";
import { SellLogo } from "./SellLogo";

const LogoContainer = styled.div`
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

export const NerdsWhoSellLogo = () => {
  return (
    <LogoContainer>
      <Nerds>
        <NerdsLogo />
      </Nerds>
      <Who>
        <WhoLogo />
      </Who>
      <Sell>
        <SellLogo />
      </Sell>
    </LogoContainer>
  );
};
