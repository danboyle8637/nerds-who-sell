import React from "react";
import styled from "styled-components";

import { ActionButton } from "../../../components/buttons/ActionButton";
import { bodyText } from "../../../styles/typography";
import { nerdsWhoSellStore } from "../../../../lib/store";
import { sizes } from "../../../styles/sizes";

interface ServiceCallToActionProps {
  cta: string;
  buttonText: string;
}

const CallToActionContainer = styled.div`
  padding: 0 12px;
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
  line-height: 1.6;
  ${sizes.aboveMobile} {
    font-size: 2.6rem;
  }
`;

export const ServiceCallToAction: React.FC<ServiceCallToActionProps> = ({
  cta,
  buttonText,
}) => {
  const toggleQuizOverlay = nerdsWhoSellStore(
    (state) => state.toggleQuizOverlay
  );

  const handleButtonClick = () => {
    toggleQuizOverlay();
  };

  const styles = {
    "--base-button-background": "var(--accent-2)",
    "--base-button-text-color": "var(--primary-background)",
  } as React.CSSProperties;

  return (
    <CallToActionContainer style={styles}>
      <Copy>{cta}</Copy>
      <ActionButton handleClick={handleButtonClick}>{buttonText}</ActionButton>
    </CallToActionContainer>
  );
};
