import styled from "styled-components";

import { PhoneImage } from "./PhoneImage";
import { bodyText } from "../../../styles/typography";

const CardContainer = styled.div`
  transform: translateX(30px);
`;

const QuestionContainer = styled.div`
  position: relative;
  padding-right: 40px;
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
  left: 0;
  width: 140px;
  transform: translate(-40px, -70px);
`;

export const PhoneCallsCard = () => {
  const styles = {
    "--background-color": "var(--base-text-color)",
    "--body-text-color": "var(--primary-background)",
  } as React.CSSProperties;

  return (
    <CardContainer style={styles}>
      <QuestionContainer>
        <Spacer />
        <Question>Making your phone ring?</Question>
        <Phone>
          <PhoneImage />
        </Phone>
      </QuestionContainer>
    </CardContainer>
  );
};
