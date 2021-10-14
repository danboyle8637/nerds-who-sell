import { useCallback } from "react";
import styled from "styled-components";

import { bodyText } from "../../../styles/typography";
import { RenderContactIcon } from "./RenderContactIcon";
import { Icon } from "../../../types/components";
import { sizes } from "../../../styles/sizes";

interface ContactInfoChipProps {
  icon: Icon;
  contactInfo: string;
}

const ChipContainer = styled.div`
  padding: 8px;
  display: grid;
  grid-template-columns: 48px 1fr;
  gap: 12px;
  justify-items: start;
  align-items: center;
  background-color: var(--accent-1);
  border-radius: 12px;
  width: 350px;
  height: 72px;
  ${sizes.aboveTablet} {
    width: 100%;
  }
`;

const InfoContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;
  gap: 4px;
  justify-items: start;
  width: 100%;
`;

const ContactLabel = styled.p`
  ${bodyText}
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.6rem;
`;

const ContactInfo = styled.p`
  ${bodyText}
  font-size: 2.2rem;
  font-weight: 400;
`;

export const ContactInfoChip: React.FC<ContactInfoChipProps> = ({
  icon,
  contactInfo,
}) => {
  const renderLabel = useCallback(() => {
    switch (icon) {
      case "email":
        return "Email";
      case "phone":
        return "Phone";
      case "twitter":
        return "Twitter";
      default: {
        throw new Error("You did not handle all possible icon.");
      }
    }
  }, [icon]);

  return (
    <ChipContainer>
      <RenderContactIcon icon={icon} />
      <InfoContainer>
        <ContactLabel>{renderLabel()}</ContactLabel>
        <ContactInfo>{contactInfo}</ContactInfo>
      </InfoContainer>
    </ChipContainer>
  );
};
