import Image from "next/image";

export interface TerminalProps {
  letterUrl: string;
}

export const LetterT: React.FC<TerminalProps> = ({ letterUrl }) => {
  return (
    <Image
      src={letterUrl}
      width={16}
      height={21}
      alt="Letter T"
      quality={100}
    />
  );
};
