import { useEffect, useRef } from "react";
import styled from "styled-components";

import { PhoneImage } from "./PhoneImage";
import { EmailLeadImage } from "./EmailLeadImage";
import { useIntersectionObserver } from "../../../hooks/componets/useIntersectionObserver";
import { getLeadsAni } from "../../../animations/images";
import { sizes } from "../../../styles/sizes";

const ImageContainer = styled.div`
  position: relative;
  width: 100px;
  transform: translateX(20px);
`;

const LeadImage1 = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 120px;
  opacity: 0;
  transform: translate(240px, 20px);
  ${sizes.aboveMobile} {
    width: 130px;
  }
`;

const LeadImage2 = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 120px;
  opacity: 0;
  transform: translate(260px, 60px);
  ${sizes.aboveMobile} {
    width: 130px;
  }
`;

const LeadImage3 = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 120px;
  opacity: 0;
  transform: translate(280px, 100px);
  ${sizes.aboveMobile} {
    width: 130px;
  }
`;

export const EmailLeads = () => {
  const lead1Ref = useRef<HTMLDivElement | null>(null);
  const lead2Ref = useRef<HTMLDivElement | null>(null);
  const lead3Ref = useRef<HTMLDivElement | null>(null);

  const { nodeRef, runAction } = useIntersectionObserver({
    rootMargin: "0px 240px 0px 0px",
    threshold: 0.5,
    shouldUnobserve: true,
  });

  useEffect(() => {
    const lead1 = lead1Ref.current;
    const lead2 = lead2Ref.current;
    const lead3 = lead3Ref.current;

    if (lead1 && lead2 && lead3 && runAction) {
      getLeadsAni(lead1, lead2, lead3);
    }
  }, [runAction]);

  return (
    <ImageContainer ref={nodeRef}>
      <PhoneImage />
      <LeadImage1 ref={lead1Ref}>
        <EmailLeadImage />
      </LeadImage1>
      <LeadImage2 ref={lead2Ref}>
        <EmailLeadImage />
      </LeadImage2>
      <LeadImage3 ref={lead3Ref}>
        <EmailLeadImage />
      </LeadImage3>
    </ImageContainer>
  );
};
