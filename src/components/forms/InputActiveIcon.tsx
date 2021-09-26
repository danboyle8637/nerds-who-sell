import Image from "next/image";
import styled from "styled-components";

const InputStatusIcon = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 4px;
  justify-items: center;
  width: fit-content;
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
