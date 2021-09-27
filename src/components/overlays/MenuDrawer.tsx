import styled from "styled-components";

const DrawerContainer = styled.div`
  position: fixed;
  top: 40px;
  right: 20px;
  bottom: 40px;
  background-color: var(--section-background-4);
  width: 375px;
`;

export const MenuDrawer = () => {
  return <DrawerContainer />;
};
