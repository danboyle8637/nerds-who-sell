import styled from "styled-components";

import { BuyNowImage } from "./BuyNowImage";
import { bodyText } from "../../../styles/typography";

const CardContainer = styled.div`
  transform: translateX(100px);
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

const BuyNowButton = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 190px;
  transform: translate(-120px, -28px);
`;

export const BuyNowCard = () => {
  const styles = {
    "--background-color": "var(--base-text-color)",
    "--body-text-color": "var(--primary-background)",
  } as React.CSSProperties;

  return (
    <CardContainer style={styles}>
      <QuestionContainer>
        <Spacer />
        <Question>Making sales?</Question>
        <BuyNowButton>
          <BuyNowImage />
        </BuyNowButton>
      </QuestionContainer>
    </CardContainer>
  );
};
