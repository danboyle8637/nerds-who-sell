import styled from "styled-components";

import { AnimatedImage } from "./AnimatedImage";
import { bodyText } from "../../../styles/typography";

const CardContainer = styled.div`
  transform: translateX(0px);
`;

const QuestionContainer = styled.div`
  position: relative;
  padding-left: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--background-color);
  border-radius: 90px;
  width: max-content;
  height: 65px;
`;

const Question = styled.p`
  ${bodyText}
`;

const Spacer = styled.span`
  width: 100px;
`;

const Phone = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 140px;
  transform: translate(40px, -70px);
`;

export const GetLeadsCard = () => {
  const styles = {
    "--background-color": "var(--base-text-color)",
    "--body-text-color": "var(--primary-background)",
  } as React.CSSProperties;

  return (
    <CardContainer style={styles}>
      <QuestionContainer>
        <Question>Bringing in fresh leads?</Question>
        <Spacer />
        <Phone>
          <AnimatedImage />
        </Phone>
      </QuestionContainer>
    </CardContainer>
  );
};
