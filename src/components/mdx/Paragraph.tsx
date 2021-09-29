import React from "react";

export const Paragraph: React.FC = (props) => {
  const styles = {
    fontSize: "1.6rem",
    color: "var(--base-text-color)",
    lineHeight: "1.8",
  };

  return <p style={styles} {...props} />;
};
