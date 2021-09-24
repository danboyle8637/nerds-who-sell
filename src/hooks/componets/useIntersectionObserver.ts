import { useEffect, useState, useCallback, useRef, useMemo } from "react";

interface ObserverProps {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number;
  shouldUnobserve: boolean;
}

type NodeRef = SVGSVGElement & HTMLDivElement & HTMLImageElement;

export const useIntersectionObserver = ({
  root = null,
  rootMargin = "0px 0px 0px 0px",
  threshold = 1,
  shouldUnobserve,
}: ObserverProps) => {
  const [runAction, setRunAction] = useState<boolean>(false);
  const [unobserve, setUnobserve] = useState<boolean>(false);

  const observerRef = useRef<IntersectionObserver | null>(null);
  const nodeRef = useRef<NodeRef | null>(null);

  const options = useMemo((): IntersectionObserverInit => {
    return {
      root: root,
      rootMargin: rootMargin,
      threshold: threshold,
    };
  }, [root, rootMargin, threshold]);

  const startAction = useCallback(
    (entries: IntersectionObserverEntry[]): void => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setRunAction(true);
          if (shouldUnobserve) {
            setUnobserve(true);
          }
        } else {
          setRunAction(false);
        }
      });
    },
    [shouldUnobserve]
  );

  useEffect(() => {
    observerRef.current = new IntersectionObserver(startAction, options);
    const node = nodeRef.current;

    if (node && !unobserve) {
      observerRef.current.observe(node);
    }

    if (node && unobserve) {
      observerRef.current.unobserve(node);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [unobserve, options, startAction]);

  return { nodeRef, runAction };
};
