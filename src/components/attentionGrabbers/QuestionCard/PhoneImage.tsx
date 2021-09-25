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

export const PhoneImage = () => {
  return (
    <CardImage>
      <Image
        src="https://ik.imagekit.io/csu76xuqqlwj/nerds-who-sell/site-assets/get-phone-calls_0F0wL8lIh.png"
        width={176}
        height={256}
        alt="A pixel art iphone ringing"
        title="Get Your Phone Ringing"
        quality={100}
      />
    </CardImage>
  );
};
