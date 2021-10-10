import styled from "styled-components";

import { MobileNav } from "./MobileNavigation";
import { LaptopNav } from "./LaptopNavigation";
import { useMatchMedia } from "../../hooks/componets/useMatchMedia";
import { sizes } from "../../styles/sizes";

const BarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: flex-end;
  background: none;
  width: 100%;
  max-width: 1440px;
  height: 50px;
  z-index: 10;
`;

export const NavBar = () => {
  const isAboveIpadPro = useMatchMedia(1100);

  return (
    <>
      <BarContainer>
        {isAboveIpadPro ? <LaptopNav /> : <MobileNav />}
      </BarContainer>
    </>
  );
};
