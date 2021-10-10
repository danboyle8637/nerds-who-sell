import styled from "styled-components";

import { NavLink } from "./NavLink";
import { navigation } from "../../../../data/nav";
import { sizes } from "../../../styles/sizes";

const NavContainer = styled.nav`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: min-content;
  column-gap: 30px;
  row-gap: 40px;
  justify-items: start;
  width: fit-content;
  ${sizes.aboveMobile} {
    grid-template-columns: repeat(5, 1fr);
    justify-items: center;
  }
`;

export const NavLinks = () => {
  const links = navigation.map((el) => {
    const id = el.id;
    const label = el.label;
    const slug = el.slug;

    return <NavLink key={id} navLabel={label} slug={slug} color="blue" />;
  });

  return <NavContainer>{links}</NavContainer>;
};
