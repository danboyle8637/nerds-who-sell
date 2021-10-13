import styled from "styled-components";

import { smallHeadline } from "../../../styles/typography";
import { RenderContactIcon } from "./RenderContactIcon";
import { Icon } from "../../../types/components";
import { useCallback } from "react";

interface ContactInfoChipProps {
  icon: Icon;
  contactInfo: string;
}

const ChipContainer = styled.div`
  display: grid;
  grid-template-columns: 48px 1fr;
  gap: 12px;
  justify-items: start;
  align-items: center;
  background-color: var(--accent-1);
  border-radius: 12px;
  width: 350px;
  height: 72px;
`;

const InfoContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;
  gap: 6px;
  justify-items: start;
  width: 100%;
`;

const ContactLabel = styled.p`
  ${smallHeadline}
  text-transform: uppercase;
  letter-spacing: 1.06rem;
`;

const ContactInfo = styled.p`
  ${smallHeadline}
  font-size: 2.2rem;
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
