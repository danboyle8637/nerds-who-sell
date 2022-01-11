import styled from "styled-components";

import { Logo } from "./Logo";
import { Headline } from "./Headline";
import { Button } from "./Button";
import { VerticalIphoneOutline } from "../../../components/svgs/VerticalIphoneOutline";
import { LaptopOutline } from "../../../components/svgs/LaptopOutline";
import { sizes } from "../../../styles/sizes";

const HeaderContainer = styled.section`
  position: relative;
  width: 100%;
  max-width: 1200px;
  height: 90vh;
  isolation: isolate;
  ${sizes.aboveTablet} {
    height: 80vh;
  }
  ${sizes.aboveIpadPro} {
    height: 90vh;
  }
`;

const BackgroundContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  justify-items: center;
  align-items: end;
  width: 100%;
  height: 100%;
  z-index: -1;
  ${sizes.aboveTablet} {
    padding-bottom: 80px;
  }
  ${sizes.aboveIpadPro} {
    padding-bottom: 0;
    align-items: end;
  }
`;

const ContentContainer = styled.div`
  padding: 0 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
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

const Iphone = styled(VerticalIphoneOutline)`
  width: 140px;
  transform: translate(10px, -70px);
  ${sizes.aboveMobile} {
    width: 240px;
    transform: translate(10px, -120px);
  }
  ${sizes.aboveIpadPro} {
    transform: translate(10px, 40px);
  }
  ${sizes.aboveLaptop} {
    transform: translate(10px, -40px);
  }
`;

const Laptop = styled(LaptopOutline)`
  width: 800px;
  transform: translate(0px, -70px);
  ${sizes.aboveMobile} {
    width: 1200px;
    transform: translate(0px, -120px);
  }
  ${sizes.aboveIpadPro} {
    transform: translate(0px, 40px);
  }
  ${sizes.aboveLaptop} {
    transform: translate(0px, -40px);
  }
`;

export const HeaderSection = () => {
  return (
    <HeaderContainer>
      <ContentContainer>
        <Logo />
        <Headline />
        <Button />
      </ContentContainer>
      <BackgroundContainer>
        <Iphone />
        <Laptop />
      </BackgroundContainer>
    </HeaderContainer>
  );
};
