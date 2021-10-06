import { useEffect, useRef } from "react";

export const useImageBlurUp = (runAction: boolean) => {
  const imageRef = useRef<(HTMLImageElement & HTMLSourceElement) | null>(null);

  useEffect(() => {
    const image = imageRef.current;

    if (runAction && image && image.dataset.src !== undefined) {
      image.src = image.dataset.src;
      image.style.filter = "blur(0px)";
    }

    if (runAction && image && image.dataset.srcset !== undefined) {
      image.srcset = image.dataset.srcset;
      image.style.filter = "blur(0px)";
    }
  }, [runAction]);

  return { imageRef };
};
