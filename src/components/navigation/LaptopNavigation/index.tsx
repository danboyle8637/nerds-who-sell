import styled from "styled-components";

import { NavLink } from "../Footer/NavLink";
import { navigation } from "../../../../data/nav";

const NavContainer = styled.div`
  padding-top: 10px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 12px;
  align-items: center;
  width: fit-content;
`;

export const LaptopNav = () => {
  const links = navigation.map((el) => {
    const id = el.id;
    const label = el.label;
    const slug = el.slug;

    return <NavLink key={id} navLabel={label} slug={slug} color="purple" />;
  });

  return <NavContainer>{links}</NavContainer>;
};
