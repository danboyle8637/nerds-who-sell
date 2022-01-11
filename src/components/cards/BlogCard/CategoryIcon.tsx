import { useCallback } from "react";
import styled from "styled-components";

import { text20 } from "../../../styles/typography";
import { MarketingCategory } from "../../images/MarketingCategory";
import { CodingCategory } from "../../images/CodingCategory";
import { ConversionCategory } from "../../images/ConversionCategory";
import { WebDesignCategory } from "../../images/WebDesignCategory";
import { PortfolioCategory } from "../../images/PortfolioCategory";
import { BlogCategory } from "../../../types/blog";
import { sizes } from "../../../styles/sizes";

interface CategoryIconProps {
  category: BlogCategory;
}

const CategoryChip = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 64px;
  height: 64px;
  ${sizes.aboveTablet} {
    width: 80px;
    height: 80px;
  }
`;

const CodingIcon = styled.div`
  width: 100%;
`;

const ConversionIcon = styled.div`
  width: 100%;
`;

const MarketingIcon = styled.div`
  width: 100%;
`;

const WebDesignIcon = styled.div`
  width: 100%;
`;

const PortfolioIcon = styled.div`
  width: 100%;
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
      case "portfolio": {
        return (
          <PortfolioIcon>
            <PortfolioCategory />
          </PortfolioIcon>
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

  return <CategoryChip style={styles}>{renderIconImage()}</CategoryChip>;
};
