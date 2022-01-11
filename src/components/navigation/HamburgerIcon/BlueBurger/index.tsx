import styled from "styled-components";

import { TopBar } from "./TopBar";
import { MiddleBar } from "./MiddleBar";
import { BottomBar } from "./BottomBar";
import React from "react";

interface HamburgerIconProps {
  handleClick: () => void;
}

const MenuContainer = styled.button`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;
  gap: 4px;
  background: none;
  border: none;
  cursor: pointer;
  width: 54px;
  &:focus {
    outline-color: var(--accent-2);
    outline-width: 2px;
    outline-offset: 20px;
    outline-style: dotted;
  }
`;

const TopContainer = styled.div`
  justify-self: end;
  width: 92%;
`;

const MiddleContainer = styled.div`
  justify-self: end;
  width: 80%;
  transform: translateX(-4px);
`;

const BottomContainer = styled.div`
  justify-self: end;
  width: 100%;
`;

export const BlueHamburgerIcon: React.FC<HamburgerIconProps> = ({
  handleClick,
}) => {
  return (
    <MenuContainer
      type="button"
      aria-label="Main menu button for mobile"
      onClick={handleClick}
    >
      <TopContainer>
        <TopBar />
      </TopContainer>
      <MiddleContainer>
        <MiddleBar />
      </MiddleContainer>
      <BottomContainer>
        <BottomBar />
      </BottomContainer>
    </MenuContainer>
  );
};
