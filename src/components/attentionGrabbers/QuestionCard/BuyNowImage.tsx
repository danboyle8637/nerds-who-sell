import Image from "next/image";
import styled from "styled-components";

import { sizes } from "../../../styles/sizes";

const CardImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 120px;
  transform: translate(-20px, -50px);
  ${sizes.aboveMobile} {
    width: 140px;
    transform: translate(-32px, -68px);
  }
`;

export const BuyNowImage = () => {
  return (
    <CardImage>
      <Image
        src="https://ik.imagekit.io/csu76xuqqlwj/nerds-who-sell/site-assets/buy-now-button_6HIlS7_-3.png"
        width={320}
        height={215}
        alt="A buy now button being clicked on"
        title="Get Your Website Selling"
        quality={100}
      />
    </CardImage>
  );
};
