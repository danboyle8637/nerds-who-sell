import styled from "styled-components";
import { sizes } from "../../styles/sizes";

const Heading3 = styled.h3`
  padding: 30px 0 30px 0;
  font-size: 2.8rem;
  color: hsl(256, 75%, 80%);
  line-height: 1.4;
  width: 100%;
  ${sizes.aboveIphone11Pro} {
    font-size: 3rem;
  }
  ${sizes.aboveMobile} {
    font-size: 3.6rem;
  }
`;

export const Headline3: React.FC = (props) => {
  return <Heading3 {...props} />;
};
