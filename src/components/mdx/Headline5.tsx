import styled from "styled-components";

const Headline = styled.h4`
  padding: 24px 0 30px 30px;
  font-size: 2.6rem;
  color: var(--accent-2);
  word-wrap: normal;
  line-height: 1.4;
  width: 100%;
`;

export const Headline5: React.FC = ({ children }) => {
  return <Headline>{children}</Headline>;
};
