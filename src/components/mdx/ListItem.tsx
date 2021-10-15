import styled from "styled-components";

const Item = styled.li`
  position: relative;
  font-size: 1.6rem;
  color: var(--base-text-color);
  line-height: 1.6;
  list-style: none;
  &:before {
    position: absolute;
    top: 0;
    left: -50px;
    content: url("https://ik.imagekit.io/csu76xuqqlwj/nerds-who-sell/site-assets/arrow-bullet_7IE0YLaOn.png");
    width: 20px;
  }
`;

export const ListItem: React.FC = ({ children }) => {
  return <Item>{children}</Item>;
};
