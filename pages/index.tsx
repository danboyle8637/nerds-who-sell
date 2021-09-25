import styled from "styled-components";

import { QuestionCard } from "../src/components/attentionGrabbers/QuestionCard";
import { ServiceCard } from "../src/components/cards/ServiceCard";

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
      <h1>Full Page Form</h1>
    </TempSection>
  );
};

export default Home;
