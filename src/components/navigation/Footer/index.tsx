import styled from "styled-components";

import { Header } from "./Header";

const FooterContainer = styled.footer`
  position: relative;
  background-color: var(--section-background-4);
  width: 100%;
  height: 500px;
  isolation: isolate;
`;

export const Footer = () => {
  return (
    <>
      <FooterContainer>
        <Header />
      </FooterContainer>
    </>
  );
};
