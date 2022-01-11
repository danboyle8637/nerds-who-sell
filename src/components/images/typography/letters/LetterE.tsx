import Image from "next/image";

import { TerminalProps } from "./LetterT";

export const LetterE: React.FC<TerminalProps> = ({ letterUrl }) => {
  return (
    <Image
      src={letterUrl}
      width={14}
      height={21}
      alt="Letter E"
      quality={100}
    />
  );
};
