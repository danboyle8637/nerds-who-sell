import styled from "styled-components";

import { text56, text68 } from "../../../styles/typography";
import { BlogHeaderImage } from "../../../components/images/blog/BlogHeaderLogo";
import { sizes } from "../../../styles/sizes";

const HeaderContainer = styled.div`
  position: relative;
  padding-top: 40px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  width: fit-content;
  ${sizes.aboveIpadPro} {
    padding-top: 80px;
  }
`;

const HeaderImage = styled.div`
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  width: 300px;
`;

const Headline = styled.h1`
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  ${text56}
  font-family: 'VT323', monospace;
  transform: translate(80px, 0);
  z-index: 1;
  ${sizes.aboveMobile} {
    ${text68}
    transform: translate(60px, 0);
  }
`;

export const BlogHeader = () => {
  return (
    <HeaderContainer>
      <HeaderImage>
        <BlogHeaderImage />
      </HeaderImage>
      <Headline>Blog</Headline>
    </HeaderContainer>
  );
};
