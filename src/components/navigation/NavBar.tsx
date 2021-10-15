import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";

import { MobileNav } from "./MobileNavigation";
import { LaptopNav } from "./LaptopNavigation";
import { BackChip } from "../chips/BackChip";
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
  const [showBackButton, setShowBackButton] = useState<boolean>(false);

  const isAboveIpadPro = useMatchMedia(1100);

  const { asPath, isReady, back } = useRouter();

  useEffect(() => {
    if (isReady) {
      const pathArray = asPath.split("/");
      const isBlogPost = pathArray.length > 2 && !pathArray[2].includes("tag");

      if (isBlogPost) {
        setShowBackButton(true);
      } else {
        setShowBackButton(false);
      }
    }
  }, [isReady, asPath]);

  const handleBackButtonClick = () => {
    back();
  };

  return (
    <>
      <BarContainer>
        <BackChip
          showBackButton={showBackButton}
          handleBackButtonClick={handleBackButtonClick}
        />
        {isAboveIpadPro ? <LaptopNav /> : <MobileNav />}
      </BarContainer>
    </>
  );
};
