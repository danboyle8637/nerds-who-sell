import { useEffect, useRef } from "react";
import styled from "styled-components";

import { BuyNowImage } from "./BuyNowImage";
import { DollarSignImage } from "./DollarSignImage";
import { bodyText } from "../../../styles/typography";
import { useIntersectionObserver } from "../../../hooks/componets/useIntersectionObserver";
import { makeSalesAni } from "../../../animations/images";
import { sizes } from "../../../styles/sizes";

const CardContainer = styled.div`
  transform: translateX(50px);
  ${sizes.aboveMobile} {
    transform: translateX(-40px);
  }
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
  transform: translate(-100px, -28px);
  ${sizes.aboveMobile} {
    width: 240px;
    transform: translate(-180px, -46px);
  }
`;

const DollarSign1 = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 60px;
  opacity: 0;
  transform: translate(0px, 20px) scale(0.4);
`;

const DollarSign2 = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 60px;
  opacity: 0;
  transform: translate(-60px, 0px) scale(0.4);
`;

export const BuyNowCard = () => {
  const dollar1Ref = useRef<HTMLDivElement>(null);
  const dollar2Ref = useRef<HTMLDivElement>(null);

  const { nodeRef, runAction } = useIntersectionObserver({
    rootMargin: "0px 240px 0px 0px",
    threshold: 0.5,
    shouldUnobserve: true,
  });

  useEffect(() => {
    const dollar1 = dollar1Ref.current;
    const dollar2 = dollar2Ref.current;

    if (dollar1 && dollar2 && runAction) {
      makeSalesAni(dollar1, dollar2);
    }
  }, [runAction]);

  const styles = {
    "--background-color": "var(--base-text-color)",
    "--body-text-color": "var(--primary-background)",
  } as React.CSSProperties;

  return (
    <CardContainer ref={nodeRef} style={styles}>
      <QuestionContainer>
        <Spacer />
        <Question>Making sales?</Question>
        <BuyNowButton>
          <BuyNowImage />
        </BuyNowButton>
        <DollarSign1 ref={dollar1Ref}>
          <DollarSignImage />
        </DollarSign1>
        <DollarSign2 ref={dollar2Ref}>
          <DollarSignImage />
        </DollarSign2>
      </QuestionContainer>
    </CardContainer>
  );
};
