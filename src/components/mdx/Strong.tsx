import React from "react";

export const Strong: React.FC = (props) => {
  const styles = {
    fontSize: "1.6rem",
    fontWeight: 700,
    color: "var(--strong-paragraph-color)",
    textShadow: "0 2px 4px hsla(0, 0%, 0%, 0.3)",
    transition: "color 300ms ease-in-out",
  };

  return <strong style={styles} {...props} />;
};
