import styled from "styled-components";

import { largeHeadline } from "../../../styles/typography";
import { BlogHeaderImage } from "../../../components/images/blog/BlogHeaderLogo";

const HeaderContainer = styled.div`
  position: relative;
  padding-top: 40px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  width: fit-content;
`;

const HeaderImage = styled.div`
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  width: 300px;
`;

const Headline = styled.h1`
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  ${largeHeadline}
  transform: translate(20px, 0);
  z-index: 1;
`;

export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderImage>
        <BlogHeaderImage />
      </HeaderImage>
      <Headline>Blog</Headline>
    </HeaderContainer>
  );
};
