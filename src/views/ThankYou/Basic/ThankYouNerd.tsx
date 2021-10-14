import styled from "styled-components";

import { NerdsSayThankYou } from "../../../components/images/NerdsSayThankYou";
import { sizes } from "../../../styles/sizes";

const TheNerd = styled.div`
  grid-area: nerd;
  width: 320px;
  ${sizes.aboveMobile} {
    width: 280px;
  }
  ${sizes.aboveTablet} {
    width: 320px;
  }
`;

export const ThankYouNerd = () => {
  return (
    <TheNerd>
      <NerdsSayThankYou />
    </TheNerd>
  );
};
