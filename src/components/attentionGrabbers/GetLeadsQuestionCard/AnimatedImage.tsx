import { useEffect, useRef } from "react";
import styled from "styled-components";

import { PhoneImage } from "./PhoneImage";
import { EmailLeadImage } from "./EmailLeadImage";
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
  transform: translate(40px, 20px);
  ${sizes.aboveMobile} {
    width: 130px;
    transform: translate(10px, -60px);
  }
`;

const LeadImage2 = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 120px;
  transform: translate(60px, 60px);
  ${sizes.aboveMobile} {
    width: 130px;
    transform: translate(30px, -14px);
  }
`;

const LeadImage3 = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 120px;
  transform: translate(80px, 100px);
  ${sizes.aboveMobile} {
    width: 130px;
    transform: translate(50px, 32px);
  }
`;

export const AnimatedImage = () => {
  const email1Ref = useRef<HTMLDivElement | null>(null);
  const email2Ref = useRef<HTMLDivElement | null>(null);
  const email3Ref = useRef<HTMLDivElement | null>(null);

  return (
    <ImageContainer>
      <PhoneImage />
      <LeadImage1>
        <EmailLeadImage />
      </LeadImage1>
      <LeadImage2>
        <EmailLeadImage />
      </LeadImage2>
      <LeadImage3>
        <EmailLeadImage />
      </LeadImage3>
    </ImageContainer>
  );
};
