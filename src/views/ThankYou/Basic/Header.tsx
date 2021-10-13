import styled from "styled-components";

import { largeHeadline } from "../../../styles/typography";
import { NerdsSayThankYou } from "../../../components/images/NerdsSayThankYou";

interface HeaderProps {
  headline: string;
}

const HeaderContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;
  gap: 20px;
  justify-items: center;
  width: fit-content;
`;

const Headline = styled.h1`
  ${largeHeadline}
`;

const TheNerd = styled.div`
  width: 220px;
`;

export const Header: React.FC<HeaderProps> = ({ headline }) => {
  return (
    <HeaderContainer>
      <Headline>{headline}</Headline>
      <TheNerd>
        <NerdsSayThankYou />
      </TheNerd>
    </HeaderContainer>
  );
};
