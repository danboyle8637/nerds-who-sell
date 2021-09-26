import { useEffect, useRef } from "react";
import Image from "next/image";
import styled from "styled-components";

import { inputActiveDots } from "../../animations/forms";

const InputStatusIcon = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 4px;
  justify-items: center;
  width: fit-content;
`;

const DotContainer = styled.div`
  width: 140%;
`;

export const InputActiveIcon = () => {
  const dot1Ref = useRef<HTMLDivElement>(null);
  const dot2Ref = useRef<HTMLDivElement>(null);
  const dot3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot1 = dot1Ref.current;
    const dot2 = dot2Ref.current;
    const dot3 = dot3Ref.current;

    if (dot1 && dot2 && dot3) {
      inputActiveDots([dot1, dot2, dot3], false);
    }

    return () => {
      if (dot1 && dot2 && dot3) {
        inputActiveDots([dot1, dot2, dot3], true);
      }
    };
  }, []);

  return (
    <InputStatusIcon>
      <DotContainer ref={dot1Ref}>
        <Image
          src="https://ik.imagekit.io/csu76xuqqlwj/nerds-who-sell/site-assets/form-active_Y3TJRWi7P.png"
          width={24}
          height={24}
          alt="Form active dot"
          quality={100}
        />
      </DotContainer>
      <DotContainer ref={dot2Ref}>
        <Image
          src="https://ik.imagekit.io/csu76xuqqlwj/nerds-who-sell/site-assets/form-active_Y3TJRWi7P.png"
          width={24}
          height={24}
          alt="Form active dot"
          quality={100}
        />
      </DotContainer>
      <DotContainer ref={dot3Ref}>
        <Image
          src="https://ik.imagekit.io/csu76xuqqlwj/nerds-who-sell/site-assets/form-active_Y3TJRWi7P.png"
          width={24}
          height={24}
          alt="Form active dot"
          quality={100}
        />
      </DotContainer>
    </InputStatusIcon>
  );
};
