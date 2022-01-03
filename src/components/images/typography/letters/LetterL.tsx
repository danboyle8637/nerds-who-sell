import Image from "next/image";

import { TerminalProps } from "./LetterT";

export const LetterL: React.FC<TerminalProps> = ({ letterUrl }) => {
  return (
    <Image
      src={letterUrl}
      width={10}
      height={21}
      alt="Letter L"
      quality={100}
    />
  );
};
