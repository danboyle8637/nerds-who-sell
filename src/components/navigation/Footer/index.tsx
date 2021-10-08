import styled from "styled-components";

import { Header } from "./Header";
import { NavLinks } from "./NavLinks";

const FooterContainer = styled.footer`
  padding: 120px 12px;
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;
  gap: 60px;
  justify-items: center;
  align-items: center;
  background-color: var(--section-background-4);
  width: 100%;
  isolation: isolate;
`;

export const Footer = () => {
  return (
    <>
      <FooterContainer>
        <Header />
        <NavLinks />
      </FooterContainer>
    </>
  );
};
