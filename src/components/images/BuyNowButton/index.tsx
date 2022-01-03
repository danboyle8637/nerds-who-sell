import { useEffect, useRef } from "react";
import styled from "styled-components";

import { BuyNowImage } from "./BuyNowImage";
import { DollarSignImage } from "./DollarSignImage";
import { useIntersectionObserver } from "../../../hooks/componets/useIntersectionObserver";
import { makeSalesAni } from "../../../animations/images";
import { sizes } from "../../../styles/sizes";

const ButtonContainer = styled.div`
  position: relative;
  width: 100%;
`;

const DollarSign1 = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: fit-content;
  opacity: 0;
  transform: translate(-40px, 20px) scale(0.4);
`;

const DollarSign2 = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: fit-content;
  opacity: 0;
  transform: translate(26px, 0px) scale(0.4);
`;

export const BuyNowButton = () => {
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
    <ButtonContainer ref={nodeRef}>
      <BuyNowImage />
      <DollarSign1 ref={dollar1Ref}>
        <DollarSignImage />
      </DollarSign1>
      <DollarSign2 ref={dollar2Ref}>
        <DollarSignImage />
      </DollarSign2>
    </ButtonContainer>
  );
};
