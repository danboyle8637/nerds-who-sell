import styled from "styled-components";

import { MultiDirectionWithScaleTransition } from "../../../animations/transitions/MultiDirectionWithScaleTransition";
import { smallHeadline } from "../../../styles/typography";
import { CodingLoader } from "../../images/CodingLoader";

interface SavingDataProps {
  activeId: number;
  questionId: number;
}

const SavingContainer = styled.div`
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;
  gap: 20px;
  justify-items: center;
  width: 100%;
`;

const Label = styled.h4`
  ${smallHeadline}
`;

export const SavingData: React.FC<SavingDataProps> = ({
  activeId,
  questionId,
}) => {
  return (
    <MultiDirectionWithScaleTransition
      isActive={activeId === questionId}
      enterDirection="from_right"
      exitDirection="to_left"
    >
      <SavingContainer>
        <CodingLoader />
        <Label>Notifying the Nerds...</Label>
      </SavingContainer>
    </MultiDirectionWithScaleTransition>
  );
};
