import styled from "styled-components";
import { MDXRemoteSerializeResult } from "next-mdx-remote";

import { Header } from "./Header";
import { CopySection } from "./CopySection";
import { ActionButton } from "../../../components/buttons/ActionButton";
import { nerdsWhoSellStore } from "../../../../lib/store";

interface CallToActionProps {
  preHeadline: string;
  headline: string;
  bodyCopy: MDXRemoteSerializeResult<Record<string, unknown>>;
}

const SectionContainer = styled.section`
  padding: 200px 12px 160px 12px;
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
  const toggleQuizOverlay = nerdsWhoSellStore(
    (state) => state.toggleQuizOverlay
  );

  const handleButtonClick = () => {
    toggleQuizOverlay();
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
