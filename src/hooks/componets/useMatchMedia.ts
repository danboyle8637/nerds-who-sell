import { useState, useEffect, useRef } from "react";

export const useMatchMedia = (width = 600) => {
  const [shouldShow, setShouldShow] = useState<boolean>(false);
  const mediaQueryRef = useRef<MediaQueryList | null>(null);

  useEffect(() => {
    if (typeof window !== undefined) {
      mediaQueryRef.current = window.matchMedia(`(min-width: ${width}px)`);

      if (mediaQueryRef.current.matches) {
        setShouldShow(true);
      } else {
        setShouldShow(false);
      }
    }

    const test = (event: MediaQueryListEvent) => {
      if (event.matches) {
        setShouldShow(true);
      } else {
        setShouldShow(false);
      }
    };

    mediaQueryRef.current!.addEventListener("change", test);

    return () => {
      if (test) {
        mediaQueryRef.current!.removeEventListener("change", test);
      }
    };
  }, [width]);

  return shouldShow;
};
