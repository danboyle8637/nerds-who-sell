import { useEffect, useRef, CSSProperties } from "react";
import styled from "styled-components";

import { Phone } from "./Phone";
import { FirstMessageBubble } from "./FirstMessageBubble";
import { SecondMessageBubble } from "./SecondMessageBubble";
import { ThirdMessageBubble } from "./ThirdMessageBubble";
import { useIntersectionObserver } from "../../../hooks/componets/useIntersectionObserver";
import { phoneTextMessageScaleAni } from "../../../animations/images";
import { siteThemeStore } from "../../../../lib/siteThemeStore";
import { sizes } from "../../../styles/sizes";

const TextMessageContainer = styled.div`
  position: absolute;
  top: -40%;
  left: 50%;
  display: flex;
  justify-content: center;
  width: 280px;
  transform: translate(-50%, -200px);
  ${sizes.aboveMobile} {
    width: 360px;
    transform: translate(-50%, -240px);
  }
`;

const PhoneContainer = styled.div`
  width: 160px;
`;

const FirstMessage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 90px;
  transform: translate(40px, 50px) scale(0);
  filter: drop-shadow(-2px 4px 12px var(--message-shadow));
  ${sizes.aboveMobile} {
    transform: translate(80px, 50px) scale(0);
  }
`;

const SecondMessage = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 90px;
  filter: drop-shadow(-2px 4px 12px var(--message-shadow));
  transform: translate(-40px, 60px) scale(0);
  ${sizes.aboveMobile} {
    transform: translate(-80px, 60px) scale(0);
  }
`;

const ThirdMessage = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 90px;
  filter: drop-shadow(-2px 4px 12px var(--message-shadow));
  transform: translate(60px, -20px) scale(0);
  ${sizes.aboveMobile} {
    transform: translate(120px, -20px) scale(0);
  }
`;

export const TextMessagePhone = () => {
  const firstMessageRef = useRef<HTMLDivElement>(null);
  const secondMessageRef = useRef<HTMLDivElement>(null);
  const thirdMessageRef = useRef<HTMLDivElement>(null);

  const activeTheme = siteThemeStore((state) => state.activeTheme);

  const { nodeRef, runAction } = useIntersectionObserver({
    threshold: 0.7,
    shouldUnobserve: true,
  });

  useEffect(() => {
    const firstMessage = firstMessageRef.current;
    const secondMessage = secondMessageRef.current;
    const thirdMessage = thirdMessageRef.current;

    if (firstMessage && secondMessage && thirdMessage && runAction) {
      const messageArray = [firstMessage, secondMessage, thirdMessage];
      phoneTextMessageScaleAni(messageArray);
    }
  }, [runAction]);

  const styles = {
    "--message-shadow":
      activeTheme === "blue"
        ? "hsla(176, 92%, 53%, 0.6)"
        : activeTheme === "purple"
        ? "hsla(246, 59%, 62%, 0.6)"
        : "hsla(120, 100%, 50%, 0.6)",
  } as CSSProperties;

  return (
    <TextMessageContainer style={styles} ref={nodeRef}>
      <PhoneContainer>
        <Phone />
      </PhoneContainer>
      <FirstMessage ref={firstMessageRef}>
        <FirstMessageBubble />
      </FirstMessage>
      <SecondMessage ref={secondMessageRef}>
        <SecondMessageBubble />
      </SecondMessage>
      <ThirdMessage ref={thirdMessageRef}>
        <ThirdMessageBubble />
      </ThirdMessage>
    </TextMessageContainer>
  );
};
