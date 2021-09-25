import Image from "next/image";
import styled from "styled-components";

const CardImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 300px;
  transform: translate(20px, -52%);
`;

export const LandingPageImage = () => {
  return (
    <CardImage>
      <Image
        src="https://ik.imagekit.io/csu76xuqqlwj/nerds-who-sell/site-assets/mobile-landing-pages_SCejbBuSE.png"
        width={512}
        height={488}
        alt="A phone with a landing page and an offer flow to a purchase button."
        title="Landing Pages for Your Business"
        quality={100}
      />
    </CardImage>
  );
};
