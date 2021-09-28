import styled from "styled-components";

import { HeaderSection } from "./HeaderSection";
import { ProblemSection } from "./ProblemSection";
import { IntroductionSection } from "./IntroductionSection";

const ViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 120px;
`;

export const HomeView = () => {
  return (
    <ViewContainer>
      <HeaderSection />
      <ProblemSection />
      <IntroductionSection />
    </ViewContainer>
  );
};
