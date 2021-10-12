import styled from "styled-components";

const Para = styled.p`
  padding-bottom: 2rem;
  font-size: 1.6rem;
  color: var(--base-text-color);
  line-height: 1.8;
  text-align: left;
  width: 100%;
  &:last-child {
    padding-bottom: 0;
  }
`;

export const Paragraph: React.FC = (props) => {
  return <Para {...props} />;
};
