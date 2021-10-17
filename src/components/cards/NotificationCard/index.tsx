import { CSSProperties, useMemo } from "react";
import styled from "styled-components";

import { CloseIcon } from "../../images/CloseIcon";
import { BasicCircleSuccessIcon } from "../../svgs/BasicCircleSuccessIcon";
import { BasicCircleDangerIcon } from "../../svgs/BasicCircleDangerIcon";
import { NotificationTransition } from "../../../animations/transitions/NotificationTransition";
import { NotificationType } from "../../../types/components";
import { buttonFocus } from "../../buttons/buttonStyles";
import { sizes } from "../../../styles/sizes";

interface NotificationCardProps {
  isActive: boolean;
  type: NotificationType;
  message: string;
  handleCloseNotification: () => void;
}

const CardContainer = styled.div`
  position: fixed;
  bottom: 12px;
  left: 50%;
  padding: 12px;
  display: grid;
  grid-template-columns: min-content 1fr min-content;
  gap: 20px;
  justify-items: start;
  align-items: start;
  background-color: var(--card-background);
  border-radius: 24px;
  width: 100%;
  max-width: 500px;
  box-shadow: 0 0 0 2px var(--card-border-color);
  transform: translateX(-50%);
  transition: background-color, box-shadow, 300ms ease-in-out;
  ${sizes.aboveMobile} {
    bottom: 40px;
  }
  ${sizes.aboveTablet} {
    bottom: 80px;
  }
`;

const IconContainer = styled.div`
  padding: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--icon-container-background);
  border-radius: 20px;
  width: 50px;
  height: 50px;
  transition: background-color 300ms ease-in-out;
`;

const MessageContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  min-height: 50px;
`;

const Label = styled.p`
  font-size: 2rem;
  font-weight: 500;
  color: var(--card-label-color);
  transition: color 300ms ease-in-out;
`;

const CloseButton = styled.button`
  padding: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--primary-background);
  border: none;
  border-radius: 50%;
  width: 38px;
  height: 38px;
  outline: none;
  cursor: pointer;
  ${buttonFocus}
`;

const SuccessIcon = styled(BasicCircleSuccessIcon)`
  width: 30px;
`;

// const InfoIcon = styled(BasicCircleInfoIcon)`
//   width: 30px;
// `;

// const WarningIcon = styled(BasicCircleWarningIcon)`
//   width: 30px;
// `;

const DangerIcon = styled(BasicCircleDangerIcon)`
  width: 30px;
`;

// success - hsl(124, 38%, 56%)
// info - hsl(218, 72%, 52%)
// warning - hsl(34, 75%, 55%)
// danger - hsl(11, 68%, 54%)

export const NotificationCard: React.FC<NotificationCardProps> = ({
  isActive,
  type,
  message,
  handleCloseNotification,
}) => {
  const renderNotificationStyles = (): CSSProperties => {
    switch (type) {
      case "success": {
        return {
          "--icon-container-background": "hsl(124, 38%, 56%)",
          "--card-background": "hsl(132, 38%, 95%)",
          "--card-border-color": "hsla(124, 38%, 56%, 0.5)",
          "--card-label-color": "hsl(210, 13%, 24%)",
          "--close-color": "hsl(210, 13%, 24%)",
        } as CSSProperties;
      }
      case "info": {
        return {
          "--icon-container-background": "hsl(218, 72%, 52%)",
          "--card-background": "hsl(218, 72%, 95%)",
          "--card-border-color": "hsla(218, 72%, 52%, 0.5)",
          "--card-label-color": "hsl(210, 13%, 24%)",
          "--close-color": "hsl(210, 13%, 24%)",
        } as CSSProperties;
      }
      case "warning": {
        return {
          "--icon-container-background": "hsl(34, 75%, 55%)",
          "--card-background": "hsl(34, 75%, 95%)",
          "--card-border-color": "hsla(34, 75%, 55%, 0.5)",
          "--card-label-color": "hsl(210, 13%, 24%)",
          "--close-color": "hsl(210, 13%, 24%)",
        } as CSSProperties;
      }
      case "danger": {
        return {
          "--icon-container-background": "hsl(11, 68%, 54%)",
          "--card-background": "hsl(11, 68%, 95%)",
          "--card-border-color": "hsla(11, 68%, 54%, 0.5)",
          "--card-label-color": "hsl(210, 13%, 24%)",
          "--close-color": "hsl(210, 13%, 24%)",
        } as CSSProperties;
      }
      // default: {
      //   throw new Error("You did not handle a BasicNotificationCard1 type");
      // }
    }
  };

  const styles = useMemo(() => renderNotificationStyles(), [type]);

  const icon = type === "success" ? <SuccessIcon /> : <DangerIcon />;

  return (
    <NotificationTransition isActive={isActive}>
      <CardContainer style={styles}>
        <IconContainer>{icon}</IconContainer>
        <MessageContainer>
          <Label>{message}</Label>
        </MessageContainer>
        <CloseButton
          type="button"
          aria-label="Close button"
          onClick={handleCloseNotification}
        >
          <CloseIcon />
        </CloseButton>
      </CardContainer>
    </NotificationTransition>
  );
};
