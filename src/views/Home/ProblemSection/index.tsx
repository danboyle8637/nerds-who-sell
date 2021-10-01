import styled from "styled-components";

import { AttentionGrabbers } from "./AttentionGrabbers";
import { QuestionHeadlines } from "./QuestionHeadlines";
import { sizes } from "../../../styles/sizes";

const SectionContainer = styled.section`
  padding: 0 12px;
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;
  gap: 120px;
  justify-items: center;
  width: 100%;
  ${sizes.aboveMobile} {
    padding: 0 26px;
    gap: 180px;
  }
  ${sizes.aboveTablet} {
    padding: 0;
    gap: 200px;
  }
`;

export const ProblemSection = () => {
  return (
    <SectionContainer>
      <AttentionGrabbers />
      <QuestionHeadlines />
    </SectionContainer>
  );
};
