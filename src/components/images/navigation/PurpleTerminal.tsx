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

export const PurpleTerminal = () => {
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
        <Squiggle letterUrl="https://ik.imagekit.io/csu76xuqqlwj/nerds-who-sell/site-assets/typography/squiggle-purple_FmaBYYy_Q.png" />
        <Slash letterUrl="https://ik.imagekit.io/csu76xuqqlwj/nerds-who-sell/site-assets/typography/slash-purple_foJZXqWMS.png" />
        <LetterT letterUrl="https://ik.imagekit.io/csu76xuqqlwj/nerds-who-sell/site-assets/typography/letter-t-purple_PkS6S08a9mT.png" />
        <LetterE letterUrl="https://ik.imagekit.io/csu76xuqqlwj/nerds-who-sell/site-assets/typography/letter-e-purple_uA0EU0WkypQ.png" />
        <LetterR letterUrl="https://ik.imagekit.io/csu76xuqqlwj/nerds-who-sell/site-assets/typography/letter-r-purple_SYuJ1iU60.png" />
        <LetterM letterUrl="https://ik.imagekit.io/csu76xuqqlwj/nerds-who-sell/site-assets/typography/letter-m-purple_DTgy0fP7teHp.png" />
        <LetterI letterUrl="https://ik.imagekit.io/csu76xuqqlwj/nerds-who-sell/site-assets/typography/letter-i-purple_l4Y4ugFvR.png" />
        <LetterN letterUrl="https://ik.imagekit.io/csu76xuqqlwj/nerds-who-sell/site-assets/typography/letter-n-purple_j25taV-Lem.png" />
        <LetterA letterUrl="https://ik.imagekit.io/csu76xuqqlwj/nerds-who-sell/site-assets/typography/letter-a-purple_2cPt_D5PP.png" />
        <LetterL letterUrl="https://ik.imagekit.io/csu76xuqqlwj/nerds-who-sell/site-assets/typography/letter-l-purple_lbPk275L2S.png" />
        <CursorIcon ref={cursorRef}>
          <Cursor letterUrl="https://ik.imagekit.io/csu76xuqqlwj/nerds-who-sell/site-assets/typography/cursor-purple_WotZCMfK6.png" />
        </CursorIcon>
      </LetterContainer>
    </TerminalContainer>
  );
};
