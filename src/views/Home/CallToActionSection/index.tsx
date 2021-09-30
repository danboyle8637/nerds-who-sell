import styled from "styled-components";

import { Header } from "./Header";
import { CopySection } from "./CopySection";
import { ActionButton } from "../../../components/buttons/ActionButton";

interface CallToActionProps {
  preHeadline: string;
  headline: string;
  bodyCopy: string;
}

const SectionContainer = styled.section`
  padding: 160px 12px;
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;
  gap: 40px;
  justify-items: center;
  background-color: var(--section-background-5);
  width: 100%;
`;

export const CallToActionSection: React.FC<CallToActionProps> = ({
  preHeadline,
  headline,
  bodyCopy,
}) => {
  const handleButtonClick = () => {
    console.log("Open up the question overlay");
  };

  return (
    <SectionContainer>
      <Header preHeadline={preHeadline} headline={headline} />
      <CopySection bodyCopy={bodyCopy} />
      <ActionButton handleClick={handleButtonClick}>
        Let's Setup a Chat!
      </ActionButton>
    </SectionContainer>
  );
};
