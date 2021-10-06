import styled from "styled-components";

import { MarketingCategory } from "../../images/MarketingCategory";
import { CodingCategory } from "../../images/CodingCategory";
import { ConversionCategory } from "../../images/ConversionCategory";
import { WebDesignCategory } from "../../images/WebDesignCategory";
import { BlogCategory } from "../../../types/blog";
import { useCallback } from "react";

interface CategoryIconProps {
  category: BlogCategory;
}

const CategoryContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: hsl(0, 0%, 8%);
  border-radius: 50%;
  width: 64px;
  height: 64px;
  box-shadow: 0 0 0 5px var(--box-shadow-color);
`;

const CodingIcon = styled.div`
  width: 40px;
`;

const ConversionIcon = styled.div`
  width: 34px;
`;

const MarketingIcon = styled.div`
  width: 46px;
  transform: rotate(-20grad);
`;

const WebDesignIcon = styled.div`
  width: 40px;
`;

export const CategoryIcon: React.FC<CategoryIconProps> = ({ category }) => {
  const renderIconImage = useCallback(() => {
    switch (category) {
      case "coding": {
        return (
          <CodingIcon>
            <CodingCategory />
          </CodingIcon>
        );
      }
      case "conversion": {
        return (
          <ConversionIcon>
            <ConversionCategory />
          </ConversionIcon>
        );
      }
      case "marketing": {
        return (
          <MarketingIcon>
            <MarketingCategory />
          </MarketingIcon>
        );
      }
      case "web-design": {
        return (
          <WebDesignIcon>
            <WebDesignCategory />
          </WebDesignIcon>
        );
      }
      default: {
        throw new Error("You did not handle all possible blog categories.");
      }
    }
  }, [category]);

  const styles = {
    "--box-shadow-color":
      category === "coding"
        ? "hsla(176, 92%, 53%, 0.4)"
        : category === "conversion"
        ? "hsla(305, 100%, 59%, 0.4)"
        : category === "web-design"
        ? "hsla(246, 59%, 62%, 0.4)"
        : "hsla(227, 37%, 93%, 0.4)",
  } as React.CSSProperties;

  return (
    <CategoryContainer style={styles}>{renderIconImage()}</CategoryContainer>
  );
};
