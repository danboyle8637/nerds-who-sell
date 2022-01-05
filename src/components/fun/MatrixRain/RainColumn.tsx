import { useEffect, useRef } from "react";
import styled from "styled-components";

import { matrixRain } from "../../../animations/fun";

interface RainColumnProps {
  charArray: JSX.Element[];
  delay: number;
  runAction: boolean;
  resetRain?: () => {};
}

const ColumContianer = styled.div`
  position: relative;
  width: fit-content;
  height: 120px;
`;

const CodeChar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 14px;
  opacity: 0;
`;

export const RainColumn: React.FC<RainColumnProps> = ({
  charArray,
  delay,
  runAction,
  resetRain,
}) => {
  const char1Ref = useRef<HTMLDivElement>(null);
  const char2Ref = useRef<HTMLDivElement>(null);
  const char3Ref = useRef<HTMLDivElement>(null);
  const char4Ref = useRef<HTMLDivElement>(null);
  const char5Ref = useRef<HTMLDivElement>(null);
  const char6Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const char1 = char1Ref.current;
    const char2 = char2Ref.current;
    const char3 = char3Ref.current;
    const char4 = char4Ref.current;
    const char5 = char5Ref.current;
    const char6 = char6Ref.current;

    if (char1 && char2 && char3 && char4 && char5 && char6 && runAction) {
      console.log(runAction);
      setTimeout(() => {
        matrixRain(char1, 0.4, false, runAction, resetRain);
        matrixRain(char2, 1.5, false, runAction, resetRain);
        matrixRain(char3, 3, false, runAction, resetRain);
        matrixRain(char4, 4.5, false, runAction, resetRain);
        matrixRain(char5, 6, false, runAction, resetRain);
        matrixRain(char6, 7.5, false, runAction, resetRain);
      }, delay);
    }

    return () => {
      if (char1 && char2 && char3 && char4 && char5 && char6) {
        matrixRain(char1, 0.4, true, runAction);
        matrixRain(char2, 1.5, true, runAction);
        matrixRain(char3, 3, true, runAction);
        matrixRain(char4, 4.5, true, runAction);
        matrixRain(char5, 6, true, runAction);
        matrixRain(char6, 7.5, true, runAction);
      }
    };
  }, [runAction, delay]);

  const char1 = <CodeChar ref={char1Ref}>{charArray[0]}</CodeChar>;
  const char2 = <CodeChar ref={char2Ref}>{charArray[1]}</CodeChar>;
  const char3 = <CodeChar ref={char3Ref}>{charArray[2]}</CodeChar>;
  const char4 = <CodeChar ref={char4Ref}>{charArray[3]}</CodeChar>;
  const char5 = <CodeChar ref={char5Ref}>{charArray[4]}</CodeChar>;
  const char6 = <CodeChar ref={char6Ref}>{charArray[5]}</CodeChar>;

  return (
    <ColumContianer>
      {char1}
      {char2}
      {char3}
      {char4}
      {char5}
      {char6}
    </ColumContianer>
  );
};
