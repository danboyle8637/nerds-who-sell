import styled from "styled-components";

import { NerdsWhoRockLaptops } from "../../../../components/images/NerdsWhoRockLaptops";
import { NerdsWhoSellLogo } from "../../../../components/images/NerdsWhoSellLogo";

const LogoContainer = styled.div`
  align-self: flex-start;
  position: relative;
  width: 250px;
  transform: translateX(-20px);
`;

const TheNerd = styled.div`
  width: 142px;
  pointer-events: none;
`;

export const Logo = () => {
  return (
    <LogoContainer>
      <TheNerd>
        <NerdsWhoRockLaptops />
      </TheNerd>
      <NerdsWhoSellLogo />
    </LogoContainer>
  );
};
