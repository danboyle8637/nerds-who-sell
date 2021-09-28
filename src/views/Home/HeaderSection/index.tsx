import styled from "styled-components";

import { Logo } from "./Logo";
import { Headline } from "./Headline";
import { Button } from "./Button";
import { sizes } from "../../../styles/sizes";

const HeaderContainer = styled.section`
  padding: 0 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  height: 90vh;
  ${sizes.aboveMobile} {
    padding: 0 26px;
  }
  ${sizes.aboveTablet} {
    height: 70vh;
  }
  ${sizes.aboveIpadPro} {
    height: 90vh;
  }
  ${sizes.aboveLaptop} {
    height: 70vh;
  }
`;

export const HeaderSection = () => {
  return (
    <HeaderContainer>
      <Logo />
      <Headline />
      <Button />
    </HeaderContainer>
  );
};
