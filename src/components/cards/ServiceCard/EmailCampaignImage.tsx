import Image from "next/image";
import styled from "styled-components";

const CardImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 300px;
  transform: translate(30px, -36%);
`;

export const EmailCampaignImage = () => {
  return (
    <CardImage>
      <Image
        src="https://ik.imagekit.io/csu76xuqqlwj/nerds-who-sell/site-assets/email-campaigns_XMpiGpSViIk.png"
        width={630}
        height={530}
        alt="A series of emails to help your business sell"
        title="Email Writing to Help You Sell"
        quality={100}
      />
    </CardImage>
  );
};
