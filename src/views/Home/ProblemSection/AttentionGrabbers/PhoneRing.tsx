import { useEffect, useRef } from "react";
import styled from "styled-components";

import { text24, text36 } from "../../../../styles/typography";
import { IPhoneImage } from "../../../../components/images/IPhone";
import { useIntersectionObserver } from "../../../../hooks/componets/useIntersectionObserver";
import { phoneRingAni } from "../../../../animations/images";
import { sizes } from "../../../../styles/sizes";

const ContentContainer = styled.div`
  position: relative;
  justify-self: start;
  width: 300px;
  isolation: isolate;
  ${sizes.aboveMobile} {
    width: 500px;
  }
`;

const HeadlinePhoneContainer = styled.div`
  display: grid;
  grid-template-columns: min-content 1fr;
  gap: 12px;
  justify-items: start;
  align-items: center;
`;

const Headline = styled.h3`
  ${text24}
  line-height: 1.5;
  ${sizes.aboveMobile} {
    ${text36}
  }
`;

const Phone = styled.div`
  width: 140px;
  ${sizes.aboveMobile} {
    width: 160px;
  }
`;

const Shadow = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  background-color: var(--section-background-5);
  filter: blur(20px);
  width: 160px;
  height: 160px;
  transform: translate(0, -50%);
  z-index: -1;
`;

export const PhoneRing = () => {
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

  return (
    <ContentContainer ref={nodeRef}>
      <HeadlinePhoneContainer>
        <Phone ref={phoneRef}>
          <IPhoneImage />
        </Phone>
        <Headline>Making Your Phone Ring</Headline>
      </HeadlinePhoneContainer>
      <Shadow />
    </ContentContainer>
  );
};
