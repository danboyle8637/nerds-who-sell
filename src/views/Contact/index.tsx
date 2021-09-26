import styled from "styled-components";

import { Header } from "./Header";
import { Form } from "./Form";
import { sizes } from "../../styles/sizes";

const ViewContainer = styled.section`
  padding: 80px 12px;
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;
  gap: 60px;
  width: 100%;
  ${sizes.aboveMobile} {
    padding: 80px 26px;
  }
  ${sizes.aboveTablet} {
    padding: 80px 0 120px 0;
  }
`;

export const ContactView = () => {
  return (
    <ViewContainer>
      <Header />
      <Form />
    </ViewContainer>
  );
};
