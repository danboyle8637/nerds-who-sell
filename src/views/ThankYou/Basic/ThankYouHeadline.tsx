import styled from "styled-components";

import { largeHeadline } from "../../../styles/typography";

interface HeaderProps {
  headline: string;
}

const Headline = styled.h1`
  grid-area: headline;
  ${largeHeadline}
  text-align: center;
`;

export const ThankYouHeadline: React.FC<HeaderProps> = ({ headline }) => {
  return <Headline>{headline}</Headline>;
};
