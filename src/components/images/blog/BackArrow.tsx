import Image from "next/image";

export const BackArrow: React.FC = () => {
  return (
    <Image
      src={`https://ik.imagekit.io/csu76xuqqlwj/nerds-who-sell/site-assets/back-arrow_ir1TXeuTkt.png`}
      width={72}
      height={100}
      alt="Arrow to go back to the next page in history"
      quality={100}
    />
  );
};
