import Image from "next/image";

import { TerminalProps } from "./LetterT";

export const Squiggle: React.FC<TerminalProps> = ({ letterUrl }) => {
  return (
    <Image
      src={letterUrl}
      width={10}
      height={21}
      alt="Letter Squiggle"
      quality={100}
    />
  );
};
