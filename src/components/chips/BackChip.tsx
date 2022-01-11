import styled from "styled-components";

import { BackArrow } from "../images/blog/BackArrow";
import { BackButtonTransition } from "../../animations/transitions/BackButtonTransition";
import { buttonFocus } from "../buttons/buttonStyles";
import { sizes } from "../../styles/sizes";

interface BackChipProps {
  showBackButton: boolean;
  handleBackButtonClick: () => void;
}

const ChipContainer = styled.button`
  position: absolute;
  top: 18px;
  left: 20px;
  padding: 4px 6px;
  display: grid;
  grid-template-columns: min-content 1fr;
  gap: 12px;
  justify-items: center;
  align-items: center;
  font-size: 1.3rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.6rem;
  color: var(--back-button-label);
  background-color: var(--back-button-bg);
  border: none;
  border-radius: 80px;
  width: fit-content;
  height: 32px;
  cursor: pointer;
  box-shadow: 0 0 0 4px hsla(225, 32%, 16%, 0.7);
  ${buttonFocus}
  transition: color, background-color, 300ms ease-in-out;
  ${sizes.aboveMobile} {
  }
`;

const Arrow = styled.div`
  width: 16px;
`;

export const BackChip: React.FC<BackChipProps> = ({
  showBackButton,
  handleBackButtonClick,
}) => {
  return (
    <BackButtonTransition isActive={showBackButton}>
      <ChipContainer type="button" onClick={handleBackButtonClick}>
        <Arrow>
          <BackArrow />
        </Arrow>
        back
      </ChipContainer>
    </BackButtonTransition>
  );
};
