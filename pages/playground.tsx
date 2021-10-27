import styled from "styled-components";

import { BlurHash } from "../src/views/playground/BlurHash";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const Playground = () => {
  return (
    <Container>
      <BlurHash />
    </Container>
  );
};

export default Playground;
