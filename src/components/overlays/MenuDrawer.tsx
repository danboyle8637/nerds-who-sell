import { useEffect, useRef } from "react";
import styled from "styled-components";

const DrawerContainer = styled.div`
  position: fixed;
  top: 12px;
  left: 12px;
  right: 12px;
  bottom: 12px;
  background-color: var(--section-background-4);
  z-index: 999;
`;

export const MenuDrawer = () => {
  return <DrawerContainer />;
};
