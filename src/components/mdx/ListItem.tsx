import styled from "styled-components";

const Item = styled.li`
  font-size: 1.6rem;
  color: var(--base-text-color);
`;

export const ListItem: React.FC = ({ children }) => {
  return <Item>{children}</Item>;
};
