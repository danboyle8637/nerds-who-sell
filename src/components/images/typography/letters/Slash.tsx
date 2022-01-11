import Image from "next/image";

import { TerminalProps } from "./LetterT";

export const Slash: React.FC<TerminalProps> = ({ letterUrl }) => {
  return (
    <Image src={letterUrl} width={12} height={21} alt="Slash" quality={100} />
  );
};
