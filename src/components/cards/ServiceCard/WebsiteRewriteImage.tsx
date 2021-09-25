import Image from "next/image";
import styled from "styled-components";

const CardImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 300px;
  transform: translate(30px, -30%);
`;

export const WebsiteRewriteImage = () => {
  return (
    <CardImage>
      <Image
        src="https://ik.imagekit.io/csu76xuqqlwj/nerds-who-sell/site-assets/website-rewrite_lmbIoVHAQ.png"
        width={615}
        height={405}
        alt="A full website rewrite."
        title="Rewrite Your Copy to Convert"
        quality={100}
      />
    </CardImage>
  );
};
