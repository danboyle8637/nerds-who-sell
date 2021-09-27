import styled from "styled-components";

const Box = styled.div`
  padding: 20px;
  background-color: orange;
  width: 200px;
  height: 150px;
`;

export const TestComponent = () => {
  return (
    <>
      <h1>Other Component</h1>
      <Box />
    </>
  );
};
