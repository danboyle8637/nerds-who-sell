import { useState, useEffect } from "react";
import Image from "next/image";
import styled from "styled-components";

import { bodyText } from "../../../styles/typography";
import { useEncodeBlurHash } from "../../../hooks/componets/useEncodeBlurHash";
import { useDecodeBlurHash } from "../../../hooks/componets/useDecodeBlurHash";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Hash = styled.p`
  ${bodyText}
`;

const imageUrl =
  "https://ik.imagekit.io/csu76xuqqlwj/program-images/tr:w-100/ignite-reset-assessment-workout-cover-1200x480_kxJzgP2zY.jpg";

const hash = "UvG+m*Mdf8S#~qM_WWbb%MSLS1s:kCxuayn*";

export const BlurHash = () => {
  // const hash = useEncodeBlurHash(imageUrl);

  const imageData = useDecodeBlurHash(hash, 1200, 480);

  return (
    <Container>
      <h1>BlurHash: </h1>
      <Image
        src="https://ik.imagekit.io/csu76xuqqlwj/program-images/ignite-reset-assessment-workout-cover-1200x480_kxJzgP2zY.jpg"
        width={1200}
        height={480}
        alt="alt text"
        // placeholder="blur"
        // blurDataURL={imageData}
      />
      {/* <Hash>{hash}</Hash> */}
    </Container>
  );
};
