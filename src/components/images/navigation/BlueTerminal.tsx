import { useEffect, useRef } from "react";
import styled from "styled-components";

import { LetterT } from "../typography/letters/LetterT";
import { LetterE } from "../typography/letters/LetterE";
import { LetterR } from "../typography/letters/LetterR";
import { LetterM } from "../typography/letters/LetterM";
import { LetterI } from "../typography/letters/LetterI";
import { LetterN } from "../typography/letters/LetterN";
import { LetterA } from "../typography/letters/LetterA";
import { LetterL } from "../typography/letters/LetterL";
import { Cursor } from "../typography/letters/Cursor";
import { Slash } from "../typography/letters/Slash";
import { Squiggle } from "../typography/letters/Squiggle";
import { blinkingCursor } from "../../../animations/navigation";

const TerminalContainer = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  width: 100%;
`;

const LetterContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: baseline;
  gap: 2px;
  width: fit-content;
`;

const CursorIcon = styled.div`
  line-height: 0;
`;

export const BlueTerminal = () => {
  const cursorRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const cursor = cursorRef.current;

    if (cursor) {
      blinkingCursor(cursor);
    }
  }, []);

  return (
    <TerminalContainer>
      <LetterContainer>
        <Squiggle letterUrl="https://ik.imagekit.io/csu76xuqqlwj/nerds-who-sell/site-assets/typography/squiggle-blue_Nrrnv1IX0.png" />
        <Slash letterUrl="https://ik.imagekit.io/csu76xuqqlwj/nerds-who-sell/site-assets/typography/slash-blue_71qX9Ja15.png" />
        <LetterT letterUrl="https://ik.imagekit.io/csu76xuqqlwj/nerds-who-sell/site-assets/typography/letter-t-blue_df6UqGh5S.png" />
        <LetterE letterUrl="https://ik.imagekit.io/csu76xuqqlwj/nerds-who-sell/site-assets/typography/letter-e-blue_rm5a3px61BR.png" />
        <LetterR letterUrl="https://ik.imagekit.io/csu76xuqqlwj/nerds-who-sell/site-assets/typography/letter-r-blue_pV5MVoPkh.png" />
        <LetterM letterUrl="https://ik.imagekit.io/csu76xuqqlwj/nerds-who-sell/site-assets/typography/letter-m-blue_cuqelkeF6mc.png" />
        <LetterI letterUrl="https://ik.imagekit.io/csu76xuqqlwj/nerds-who-sell/site-assets/typography/letter-i-blue_8psOdRNvv.png" />
        <LetterN letterUrl="https://ik.imagekit.io/csu76xuqqlwj/nerds-who-sell/site-assets/typography/letter-n-blue_zAt9DyFYk.png" />
        <LetterA letterUrl="https://ik.imagekit.io/csu76xuqqlwj/nerds-who-sell/site-assets/typography/letter-a-blue_n8OfNdGUK.png" />
        <LetterL letterUrl="https://ik.imagekit.io/csu76xuqqlwj/nerds-who-sell/site-assets/typography/letter-l-blue_s4Rw47-206.png" />
        <CursorIcon ref={cursorRef}>
          <Cursor letterUrl="https://ik.imagekit.io/csu76xuqqlwj/nerds-who-sell/site-assets/typography/cursor-blue_-KLOaeg_dv.png" />
        </CursorIcon>
      </LetterContainer>
    </TerminalContainer>
  );
};
