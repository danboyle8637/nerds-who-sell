import styled from "styled-components";

import { HamburgerIcon } from "../src/components/navigation/HamburgerIcon";

const TempSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const Home = () => {
  return (
    <TempSection>
      <HamburgerIcon handleClick={() => console.log("Open up the menu")} />
    </TempSection>
  );
};

export default Home;
