import Image from "next/image";

import { TerminalProps } from "./LetterT";

export const LetterM: React.FC<TerminalProps> = ({ letterUrl }) => {
  return (
    <Image
      src={letterUrl}
      width={15}
      height={21}
      alt="Letter M"
      quality={100}
    />
  );
};
