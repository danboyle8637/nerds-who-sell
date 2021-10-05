import styled from "styled-components";

import { HeaderSection } from "./HeaderSection";
import { IntroSection } from "./IntroSection";
import { Markdown } from "../../types/pages";

interface AboutViewProps {
  headerHeadline: string;
  introBodyCopy: Markdown;
}

const ViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const AboutView: React.FC<AboutViewProps> = ({
  headerHeadline,
  introBodyCopy,
}) => {
  return (
    <ViewContainer>
      <HeaderSection headline={headerHeadline} />
      <IntroSection bodyCopy={introBodyCopy.code} />
    </ViewContainer>
  );
};
