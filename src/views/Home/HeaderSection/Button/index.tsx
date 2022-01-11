import styled from "styled-components";

import { text20 } from "../../../../styles/typography";
import { ActionButton } from "../../../../components/buttons/ActionButton";
import { nerdsWhoSellStore } from "../../../../../lib/store";

const ButtonContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;
  gap: 20px;
  width: fit-content;
`;

const Declaration = styled.p`
  ${text20}
  padding-left: 20px;
  font-weight: 700;
`;

export const Button = () => {
  const toggleQuizOverlay = nerdsWhoSellStore(
    (state) => state.toggleQuizOverlay
  );

  const handleButtonClick = () => {
    toggleQuizOverlay();
  };

  return (
    <ButtonContainer>
      <Declaration>Becuase it should!</Declaration>
      <ActionButton handleClick={handleButtonClick}>
        Let's Setup a Chat!
      </ActionButton>
    </ButtonContainer>
  );
};
