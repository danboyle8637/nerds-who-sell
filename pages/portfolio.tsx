import styled from "styled-components";
import { CodingLoader } from "../src/components/images/CodingLoader";

const TempView = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

const Portgolio = () => {
  return (
    <TempView>
      <CodingLoader />
    </TempView>
  );
};

export default Portgolio;
