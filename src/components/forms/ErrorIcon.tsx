import Image from "next/image";
import styled from "styled-components";

const InputStatusIcon = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 300px;
  transform: translate(0, 0);
`;

export const ErrorIcon = () => {
  return (
    <InputStatusIcon>
      <Image
        src="https://ik.imagekit.io/csu76xuqqlwj/nerds-who-sell/site-assets/form-error_LoaIolaz0hq.png"
        width={63}
        height={63}
        alt="Error"
        quality={100}
      />
    </InputStatusIcon>
  );
};
