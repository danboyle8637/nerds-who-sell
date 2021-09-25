import Image from "next/image";
import styled from "styled-components";

const CardImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 300px;
  transform: translate(30px, -48%);
`;

export const SellOnlineImage = () => {
  return (
    <CardImage>
      <Image
        src="https://ik.imagekit.io/csu76xuqqlwj/nerds-who-sell/site-assets/sell-on-website_Nz6uAs7Vw.png"
        width={575}
        height={630}
        alt="A phone with a landing page and an offer flow to a purchase button."
        title="Landing Pages for Your Business"
        quality={100}
      />
    </CardImage>
  );
};
