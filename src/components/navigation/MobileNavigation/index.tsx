import { useEffect, useRef } from "react";
import styled from "styled-components";

import { NavItem } from "./NavItem";
import { navItemsEnterAni } from "../../../animations/navigation";
import { navigation } from "../../../../data/nav";

interface MobileNavigationProps {
  activePage: string;
  isOpen: boolean;
  toggleNavDrawer: () => void;
}

const NavListContainer = styled.nav`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;
  gap: 40px;
  justify-items: center;
  width: 100%;
`;

export const MobileNavigation: React.FC<MobileNavigationProps> = ({
  activePage,
  isOpen,
  toggleNavDrawer,
}) => {
  const navItemsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const navItems = navItemsRef.current;

    if (navItems && isOpen) {
      navItemsEnterAni(navItems);
    }
  }, [isOpen]);

  const handleToggleNavDrawer = () => {
    toggleNavDrawer();
  };

  const navLinks = navigation.map((item, i) => {
    const id = item.id;
    const label = item.label;
    const slug = item.slug;

    const isActive =
      label === activePage || (label === "home" && activePage === "");

    return (
      <NavItem
        key={id}
        ref={(el: HTMLDivElement) => (navItemsRef.current[i] = el)}
        isActive={isActive}
        label={label}
        slug={slug}
        handleToggleNavDrawer={handleToggleNavDrawer}
      />
    );
  });

  return <NavListContainer>{navLinks}</NavListContainer>;
};
