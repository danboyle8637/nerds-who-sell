import Image from "next/image";

import { TerminalProps } from "./LetterT";

// letter i
export const LetterI: React.FC<TerminalProps> = ({ letterUrl }) => {
  return (
    <Image src={letterUrl} width={4} height={21} alt="Letter I" quality={100} />
  );
};
