import { useState } from "react";

export const useIsHovering = () => {
  const [isHovering, setIsHovering] = useState<boolean>(false);

  const toggleIsHovering = () => setIsHovering((prevValue) => !prevValue);

  return {
    isHovering,
    toggleIsHovering,
  };
};
