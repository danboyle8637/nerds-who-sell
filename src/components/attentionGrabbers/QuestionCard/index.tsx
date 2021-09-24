import styled from "styled-components";

import { BuyNowImage } from "./BuyNowImage";
import { bodyText } from "../../../styles/typography";
import { AlignQuestion } from "../../../types/components";

interface QuestionCardProps {
  align: AlignQuestion;
  spacerWidth: number;
}

const CardContainer = styled.div`
  position: relative;
  width: 375px;
`;

const QuestionContainer = styled.div`
  padding-left: var(--padding-left);
  padding-right: var(--padding-right);
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
  width: var(--spacer-width);
`;

export const QuestionCard: React.FC<QuestionCardProps> = ({
  align,
  spacerWidth,
  children,
}) => {
  const styles = {
    "--padding-left": align === "left" ? "40px" : "0",
    "--padding-right": align === "right" ? "40px" : "0",
    "--background-color": "var(--base-text-color)",
    "--body-text-color": "var(--primary-background)",
    "--spacer-width": `${spacerWidth}px`,
  } as React.CSSProperties;

  return (
    <CardContainer style={styles}>
      <BuyNowImage />
      <QuestionContainer>
        {align === "left" ? (
          <>
            <Question>{children}</Question>
            <Spacer />
          </>
        ) : (
          <>
            <Spacer />
            <Question>{children}</Question>
          </>
        )}
      </QuestionContainer>
    </CardContainer>
  );
};
