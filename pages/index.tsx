import styled from "styled-components";

import { Form } from "../src/views/Contact/Form";

const TempSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const Home = () => {
  return (
    <TempSection>
      <Form />
    </TempSection>
  );
};

export default Home;
