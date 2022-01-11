import Image from "next/image";

import { TerminalProps } from "./LetterT";

export const LetterN: React.FC<TerminalProps> = ({ letterUrl }) => {
  return (
    <Image
      src={letterUrl}
      width={14}
      height={21}
      alt="Letter N"
      quality={100}
    />
  );
};
