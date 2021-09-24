import styled from "styled-components";

import { QuestionCard } from "../src/components/attentionGrabbers/QuestionCard";

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
      <QuestionCard align="right" spacerWidth={40}>
        Brining in fresh leads?
      </QuestionCard>
    </TempSection>
  );
};

export default Home;
