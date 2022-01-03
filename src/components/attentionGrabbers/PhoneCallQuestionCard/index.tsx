import { useEffect, useRef } from "react";
import styled from "styled-components";

import { PhoneImage } from "./PhoneImage";
import { text24, text36 } from "../../../styles/typography";
import { phoneRingAni } from "../../../animations/images";
import { useIntersectionObserver } from "../../../hooks/componets/useIntersectionObserver";
import { sizes } from "../../../styles/sizes";

const CardContainer = styled.div`
  transform: translateX(14px);
  ${sizes.aboveMobile} {
    transform: translateX(-160px);
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
  ${text24}
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
  const phoneRef = useRef<HTMLDivElement | null>(null);

  const { nodeRef, runAction } = useIntersectionObserver({
    rootMargin: "0px 0px -200px 0px",
    threshold: 0.5,
    shouldUnobserve: true,
  });

  useEffect(() => {
    const phone = phoneRef.current;

    if (phone && runAction) {
      phoneRingAni(phone);
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
        <Question>Making your phone ring?</Question>
        <Phone ref={phoneRef}>
          <PhoneImage />
        </Phone>
      </QuestionContainer>
    </CardContainer>
  );
};
