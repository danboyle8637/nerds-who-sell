import Image from "next/image";

interface ImageProps {
  imageUrl: string;
}

export const TheNerd: React.FC<ImageProps> = ({ imageUrl }) => {
  return (
    <Image
      src={imageUrl}
      width={350}
      height={434}
      alt="Dan holding a laptop and phone"
      title="Nerds Who Sell"
      quality={100}
    />
  );
};
