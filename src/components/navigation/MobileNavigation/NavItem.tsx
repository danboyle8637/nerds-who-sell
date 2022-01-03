import { forwardRef } from "react";
import Link from "next/link";
import styled from "styled-components";

import { buttonFocus } from "../../buttons/buttonStyles";
import { siteThemeStore } from "../../../../lib/siteThemeStore";

interface NavItemProps {
  isActive: boolean;
  label: string;
  slug: string;
  handleToggleNavDrawer: () => void;
}

const Label = styled.a`
  font-size: 4rem;
  font-weight: 700;
  color: var(--nav-item-color);
  border-radius: 12px;
  text-decoration: none;
  text-transform: capitalize;
  ${buttonFocus}
`;

export const NavItem = forwardRef<HTMLDivElement, NavItemProps>(
  ({ isActive, label, slug, handleToggleNavDrawer }, ref) => {
    const activeTheme = siteThemeStore((state) => state.activeTheme);

    const styles = {
      "--nav-item-color": isActive
        ? "var(--base-text-color)"
        : "var(--accent-2)",
    } as React.CSSProperties;

    return (
      <div ref={ref}>
        <Link href={slug} passHref={true}>
          <Label style={styles} onClick={handleToggleNavDrawer}>
            {label}
          </Label>
        </Link>
      </div>
    );
  }
);
