import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 800px;
`;

export const ContentContainer: React.FC = ({ children }) => (
  <Container>{children}</Container>
);
