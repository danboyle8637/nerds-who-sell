import Image from "next/image";
import styled from "styled-components";

const InputStatusIcon = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 4px;
  justify-items: center;
  width: fit-content;
  transform: translate(0, 0);
`;

export const InputActiveIcon = () => {
  return (
    <InputStatusIcon>
      <Image
        src="https://ik.imagekit.io/csu76xuqqlwj/nerds-who-sell/site-assets/form-active_Y3TJRWi7P.png"
        width={24}
        height={24}
        alt="Form active dot"
        quality={100}
      />
      <Image
        src="https://ik.imagekit.io/csu76xuqqlwj/nerds-who-sell/site-assets/form-active_Y3TJRWi7P.png"
        width={24}
        height={24}
        alt="Form active dot"
        quality={100}
      />
      <Image
        src="https://ik.imagekit.io/csu76xuqqlwj/nerds-who-sell/site-assets/form-active_Y3TJRWi7P.png"
        width={24}
        height={24}
        alt="Form active dot"
        quality={100}
      />
    </InputStatusIcon>
  );
};
