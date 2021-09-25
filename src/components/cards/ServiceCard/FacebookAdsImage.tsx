import Image from "next/image";
import styled from "styled-components";

const CardImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
`;

const FacebookAd = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 200px;
  transform: translate(-10px, -50%);
`;

const MousePointer1 = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 32px;
  transform: translate(30px, 40px);
`;

const MousePointer2 = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 28px;
  transform: translate(60px, 60px);
`;

const MousePointer3 = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 40px;
  transform: translate(100px, 20px);
`;

const MousePointer4 = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 36px;
  transform: translate(20px, 90px);
`;

export const FacebookAdsImage = () => {
  return (
    <CardImage>
      <ImageContainer>
        <FacebookAd>
          <Image
            src="https://ik.imagekit.io/csu76xuqqlwj/nerds-who-sell/site-assets/facebook-ads_PKU2NkEMoo.png"
            width={445}
            height={625}
            alt="Facebook ads that attract the right type of clicks."
            title="Quality Facebook Ads That Get Clicks"
            quality={100}
          />
        </FacebookAd>
        <MousePointer1>
          <Image
            src="https://ik.imagekit.io/csu76xuqqlwj/nerds-who-sell/site-assets/mouse-pointer_KPITHq6ZXKBA.png"
            width={54}
            height={48}
            alt="A mouse cursor."
            quality={100}
          />
        </MousePointer1>
        <MousePointer2>
          <Image
            src="https://ik.imagekit.io/csu76xuqqlwj/nerds-who-sell/site-assets/mouse-pointer_KPITHq6ZXKBA.png"
            width={54}
            height={48}
            alt="A mouse cursor."
            quality={100}
          />
        </MousePointer2>
        <MousePointer3>
          <Image
            src="https://ik.imagekit.io/csu76xuqqlwj/nerds-who-sell/site-assets/mouse-pointer_KPITHq6ZXKBA.png"
            width={54}
            height={48}
            alt="A mouse cursor."
            quality={100}
          />
        </MousePointer3>
        <MousePointer4>
          <Image
            src="https://ik.imagekit.io/csu76xuqqlwj/nerds-who-sell/site-assets/mouse-pointer_KPITHq6ZXKBA.png"
            width={54}
            height={48}
            alt="A mouse cursor."
            quality={100}
          />
        </MousePointer4>
      </ImageContainer>
    </CardImage>
  );
};
