import styled from "styled-components";

import { text36, text56 } from "../../../styles/typography";
import { BlogCategory } from "../../../types/blog";
import { sizes } from "../../../styles/sizes";

interface RenderHeadlineProps {
  category: BlogCategory;
}

const Headline = styled.h1`
  ${text36}
  font-family: 'VT323', monospace;
  ${sizes.aboveMobile} {
    ${text56}
  }
`;

export const RenderHeadline: React.FC<RenderHeadlineProps> = ({ category }) => {
  switch (category) {
    case "coding": {
      return <Headline>Coding</Headline>;
    }
    case "conversion": {
      return <Headline>Conversion</Headline>;
    }
    case "marketing": {
      return <Headline>Marketing</Headline>;
    }
    case "portfolio": {
      return <Headline>Portfolio</Headline>;
    }
    case "web-design": {
      return <Headline>Web Design</Headline>;
    }
    default: {
      throw new Error(
        "You must have added a new category becuase it's not showing a headline. Fix it!"
      );
    }
  }
};
