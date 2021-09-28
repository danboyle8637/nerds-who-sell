import styled from "styled-components";

import { AttentionGrabbers } from "./AttentionGrabbers";
import { QuestionHeadlines } from "./QuestionHeadlines";

const SectionContainer = styled.section`
  padding: 0 12px;
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;
  gap: 120px;
  width: 100%;
`;

export const ProblemSection = () => {
  return (
    <SectionContainer>
      <AttentionGrabbers />
      <QuestionHeadlines />
    </SectionContainer>
  );
};
