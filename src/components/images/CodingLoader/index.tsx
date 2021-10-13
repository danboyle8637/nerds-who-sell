import { useEffect, useRef } from "react";
import styled from "styled-components";

import { CodeScreen } from "./CodeScreen";
import { BlueLine1 } from "./BlueCode1";
import { BlueLine2 } from "./BlueCode2";
import { BlueLine3 } from "./BlueCode3";
import { BlueLine4 } from "./BlueCode4";
import { BlueLine5 } from "./BlueCode5";
import { PinkCode1 } from "./PinkCode1";
import { PinkCode2 } from "./PinkCode2";
import { codingLoaderAni } from "../../../animations/images";

const ScreenContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  width: 220px;
`;

const Screen = styled.div`
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  width: 100%;
`;

const CodeHolder = styled.div`
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  position: relative;
  width: 70%;
  height: 80px;
  z-index: 1;
  transform: translate(20px, 55px);
  overflow: hidden;
`;

const Blue1 = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  transform: translate(6px, 0px);
  z-index: 1;
`;

const Blue2 = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  padding-left: 14px;
  width: 100%;
  transform: translate(16px, 10px);
  z-index: 1;
`;

const Blue3 = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  padding-left: 14px;
  width: 100%;
  transform: translate(16px, 20px);
  z-index: 1;
`;

const Blue4 = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  padding-left: 14px;
  width: 100%;
  transform: translate(16px, 30px);
  z-index: 1;
`;

const Blue5 = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  transform: translate(6px, 40px);
  z-index: 1;
`;

const Pink1 = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  transform: translate(6px, 50px);
  z-index: 1;
`;

const Pink2 = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding-left: 14px;
  transform: translate(16px, 60px);
  z-index: 1;
`;

export const CodingLoader = () => {
  const code1Ref = useRef<HTMLDivElement | null>(null);
  const code2Ref = useRef<HTMLDivElement | null>(null);
  const code3Ref = useRef<HTMLDivElement | null>(null);
  const code4Ref = useRef<HTMLDivElement | null>(null);
  const code5Ref = useRef<HTMLDivElement | null>(null);
  const code6Ref = useRef<HTMLDivElement | null>(null);
  const code7Ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const code1 = code1Ref.current;
    const code2 = code2Ref.current;
    const code3 = code3Ref.current;
    const code4 = code4Ref.current;
    const code5 = code5Ref.current;
    const code6 = code6Ref.current;
    const code7 = code7Ref.current;

    if (code1 && code2 && code3 && code4 && code5 && code6 && code7) {
      const codeLines = [code1, code2, code3, code4, code5, code6, code7];
      codingLoaderAni(codeLines, false);
    }

    return () => {
      if (code1 && code2 && code3 && code4 && code5 && code6 && code7) {
        const codeLines = [code1, code2, code3, code4, code5, code6, code7];
        codingLoaderAni(codeLines, true);
      }
    };
  }, []);

  return (
    <ScreenContainer>
      <Screen>
        <CodeScreen />
      </Screen>
      <CodeHolder>
        <Blue1 ref={code1Ref}>
          <BlueLine1 />
        </Blue1>
        <Blue2 ref={code2Ref}>
          <BlueLine2 />
        </Blue2>
        <Blue3 ref={code3Ref}>
          <BlueLine3 />
        </Blue3>
        <Blue4 ref={code4Ref}>
          <BlueLine4 />
        </Blue4>
        <Blue5 ref={code5Ref}>
          <BlueLine5 />
        </Blue5>
        <Pink1 ref={code6Ref}>
          <PinkCode1 />
        </Pink1>
        <Pink2 ref={code7Ref}>
          <PinkCode2 />
        </Pink2>
      </CodeHolder>
    </ScreenContainer>
  );
};
