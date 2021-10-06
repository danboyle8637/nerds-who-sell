import styled from "styled-components";

import { CodingLaptop } from "../../images/CodingLaptop";
import { NerdsLogo } from "../../images/NerdsLogo";
import { WhoLogo } from "../../images/WhoLogo";
import { SellLogo } from "../../images/SellLogo";

const HeaderContainer = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0px;
  align-items: center;
  width: fit-content;
  transform: translate(-50%, -40px);
`;

const Laptop = styled.div`
  width: 120px;
`;

const LogoContainer = styled.div`
  display: grid;
  grid-template-areas:
    "nerds nerds"
    "who sell";
  gap: 0px;
  width: 130px;
  transform: translateX(-20px);
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

export const Header = () => {
  return (
    <HeaderContainer>
      <Laptop>
        <CodingLaptop />
      </Laptop>
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
    </HeaderContainer>
  );
};
