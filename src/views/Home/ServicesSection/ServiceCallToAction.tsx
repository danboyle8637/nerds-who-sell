import React from "react";
import styled from "styled-components";

import { ActionButton } from "../../../components/buttons/ActionButton";
import { bodyText } from "../../../styles/typography";
import { sizes } from "../../../styles/sizes";

interface ServiceCallToActionProps {
  cta: string;
  buttonText: string;
}

const CallToActionContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;
  gap: 60px;
  justify-items: center;
  width: 100%;
  max-width: 1200px;
`;

const Copy = styled.p`
  ${bodyText}
  font-size: 2.6rem;
  ${sizes.aboveMobile} {
    font-size: 2.6rem;
  }
`;

export const ServiceCallToAction: React.FC<ServiceCallToActionProps> = ({
  cta,
  buttonText,
}) => {
  const handleButtonClick = () => {
    console.log("Open up the full page form and lets convert them.");
  };

  return (
    <CallToActionContainer>
      <Copy>{cta}</Copy>
      <ActionButton handleClick={handleButtonClick}>{buttonText}</ActionButton>
    </CallToActionContainer>
  );
};
