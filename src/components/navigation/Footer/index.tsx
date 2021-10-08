import styled from "styled-components";

import { Header } from "./Header";
import { NavLinks } from "./NavLinks";
import { Legal } from "./Legal";

const FooterContainer = styled.footer`
  position: relative;
  padding: 120px 12px 200px 12px;
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;
  gap: 60px;
  justify-items: center;
  align-items: center;
  background-color: var(--section-background-4);
  background-image: url("/footer-background.svg");
  background-repeat: repeat;
  background-size: 200px 200px;
  width: 100%;
  isolation: isolate;
`;

export const Footer = () => {
  return (
    <>
      <FooterContainer>
        <Header />
        <NavLinks />
        <Legal />
      </FooterContainer>
    </>
  );
};
