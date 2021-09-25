import Image from "next/image";
import styled from "styled-components";

const CardImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 300px;
  transform: translate(20px, -42%);
`;

export const WebDevImage = () => {
  return (
    <CardImage>
      <Image
        src="https://ik.imagekit.io/csu76xuqqlwj/nerds-who-sell/site-assets/laptop-and-desktop_1m9GxtELr.png"
        width={388}
        height={376}
        alt="Two computers with code on their screens"
        title="Web Design and Development"
        quality={100}
      />
    </CardImage>
  );
};
