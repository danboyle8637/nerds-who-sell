import Image from "next/image";
import styled from "styled-components";

import { sizes } from "../../../styles/sizes";

const CardImage = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 120px;
  transform: translate(-50px, -80px);
  ${sizes.aboveMobile} {
    width: 130px;
    transform: translate(-20px, -90px);
  }
`;

const LeadImage1 = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 120px;
  transform: translate(-20px, -40px);
  ${sizes.aboveMobile} {
    width: 130px;
    transform: translate(10px, -60px);
  }
`;

const LeadImage2 = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 120px;
  transform: translate(0px, 0px);
  ${sizes.aboveMobile} {
    width: 130px;
    transform: translate(30px, -14px);
  }
`;

const LeadImage3 = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 120px;
  transform: translate(20px, 40px);
  ${sizes.aboveMobile} {
    width: 130px;
    transform: translate(50px, 32px);
  }
`;

export const GetLeadsImage = () => {
  return (
    <>
      <CardImage>
        <Image
          src="https://ik.imagekit.io/csu76xuqqlwj/nerds-who-sell/site-assets/get-leads-phone-only_3Cmubd0tMPL.png"
          width={136}
          height={248}
          alt="Mobile phone"
          title="Mobile phone in the mail app"
          quality={100}
        />
      </CardImage>
      <LeadImage1>
        <Image
          src="https://ik.imagekit.io/csu76xuqqlwj/nerds-who-sell/site-assets/email-lead-notification_eDwGhdNq4.png"
          width={111}
          height={36}
          alt="Lead email coming into the phone"
          title="Lead Email"
          quality={100}
        />
      </LeadImage1>
      <LeadImage2>
        <Image
          src="https://ik.imagekit.io/csu76xuqqlwj/nerds-who-sell/site-assets/email-lead-notification_eDwGhdNq4.png"
          width={111}
          height={36}
          alt="Lead email coming into the phone"
          title="Lead Email"
          quality={100}
        />
      </LeadImage2>
      <LeadImage3>
        <Image
          src="https://ik.imagekit.io/csu76xuqqlwj/nerds-who-sell/site-assets/email-lead-notification_eDwGhdNq4.png"
          width={111}
          height={36}
          alt="Lead email coming into the phone"
          title="Lead Email"
          quality={100}
        />
      </LeadImage3>
    </>
  );
};
