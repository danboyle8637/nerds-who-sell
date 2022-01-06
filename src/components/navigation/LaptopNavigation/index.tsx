import styled from "styled-components";

import { NavLink } from "../Footer/NavLink";
import { ThemeSwitcher } from "../../buttons/ThemeSwitcher";
import { navigation } from "../../../../data/nav";
import { siteThemeStore } from "../../../../lib/siteThemeStore";

const NavContainer = styled.nav`
  padding-top: 10px;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 12px;
  justify-items: center;
  align-items: center;
  width: fit-content;
`;

export const LaptopNav = () => {
  const activeTheme = siteThemeStore((state) => state.activeTheme);

  const links = navigation.map((el) => {
    const id = el.id;
    const label = el.label;
    const slug = el.slug;

    return (
      <NavLink key={id} navLabel={label} slug={slug} color={activeTheme} />
    );
  });

  console.log(activeTheme);

  return (
    <NavContainer>
      {links} <ThemeSwitcher />
    </NavContainer>
  );
};
