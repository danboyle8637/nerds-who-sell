import styled from "styled-components";

import { sizes } from "../../styles/sizes";

const Headline = styled.h4`
  padding: 24px 0 30px 0;
  font-size: 2.4rem;
  color: hsl(194, 90%, 62%);
  word-wrap: normal;
  line-height: 1.4;
  width: 100%;
  ${sizes.aboveIphone11Pro} {
    font-size: 2.8rem;
  }
  ${sizes.aboveMobile} {
    font-size: 3.2rem;
  }
`;

export const Headline4: React.FC = ({ children }) => {
  return <Headline># {children}</Headline>;
};
