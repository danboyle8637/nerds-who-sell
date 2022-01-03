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

export const MatrixTerminal = () => {
  const cursorRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const cursor = cursorRef.current;

    if (cursor) {
      console.log(cursor);
      blinkingCursor(cursor);
    }
  }, []);

  return (
    <TerminalContainer>
      <LetterContainer>
        <Squiggle letterUrl="https://ik.imagekit.io/csu76xuqqlwj/nerds-who-sell/site-assets/typography/squiggle-green_4gIrksQ4f.png" />
        <Slash letterUrl="https://ik.imagekit.io/csu76xuqqlwj/nerds-who-sell/site-assets/typography/slash-green_dv5OnVTLG.png" />
        <LetterT letterUrl="https://ik.imagekit.io/csu76xuqqlwj/nerds-who-sell/site-assets/typography/letter-t_3ElEoaYxn4g.png" />
        <LetterE letterUrl="https://ik.imagekit.io/csu76xuqqlwj/nerds-who-sell/site-assets/typography/letter-e_aea-MRDJr.png" />
        <LetterR letterUrl="https://ik.imagekit.io/csu76xuqqlwj/nerds-who-sell/site-assets/typography/letter-r_HYURxVfAP.png" />
        <LetterM letterUrl="https://ik.imagekit.io/csu76xuqqlwj/nerds-who-sell/site-assets/typography/letter-m_AQLM3hqQRs5N.png" />
        <LetterI letterUrl="https://ik.imagekit.io/csu76xuqqlwj/nerds-who-sell/site-assets/typography/letter-i_b8IlpClNos.png" />
        <LetterN letterUrl="https://ik.imagekit.io/csu76xuqqlwj/nerds-who-sell/site-assets/typography/letter-n_lGv63dN-7-.png" />
        <LetterA letterUrl="https://ik.imagekit.io/csu76xuqqlwj/nerds-who-sell/site-assets/typography/letter-a_LZkd-ANtW.png" />
        <LetterL letterUrl="https://ik.imagekit.io/csu76xuqqlwj/nerds-who-sell/site-assets/typography/letter-l_SLHQ8IFYS.png" />
        <CursorIcon ref={cursorRef}>
          <Cursor letterUrl="https://ik.imagekit.io/csu76xuqqlwj/nerds-who-sell/site-assets/typography/cursor_LLsVpG3yEj4.png" />
        </CursorIcon>
      </LetterContainer>
    </TerminalContainer>
  );
};
