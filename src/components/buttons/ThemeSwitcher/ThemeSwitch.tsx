import styled from "styled-components";

import { BlueActiveIndicator } from "../../images/themeSwitcher/BlueActiveIndicator";
import { BlueThemeSwitch } from "../../images/themeSwitcher/BlueThemeSwitch";
import { PurpleActiveIndicator } from "../../images/themeSwitcher/PurpleActiveIndicator";
import { PurpleThemeSwitch } from "../../images/themeSwitcher/PurpleThemeSwitch";
import { GreenActiveIndicator } from "../../images/themeSwitcher/GreenActiveIndicator";
import { GreenThemeSwitch } from "../../images/themeSwitcher/GreenThemeSwitch";
import { SiteTheme } from "../../../types/components";

interface SwitchProps {
  isActive: boolean;
  theme: SiteTheme;
  handleClick: (theme: SiteTheme) => void;
}

const ThemeButton = styled.button`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  justify-items: center;
  align-items: center;
  background: none;
  border: none;
  border-radius: 50%;
  width: 26px;
  height: 26px;
  cursor: pointer;
  &:focus {
    outline-color: var(--accent-2);
    outline-width: 2px;
    outline-offset: 4px;
    outline-style: dotted;
  }
`;

const SwitchContainer = styled.div`
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  width: 100%;
`;

const SwitchIndicator = styled.div`
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  width: 100%;
  z-index: 1;
`;

const BlueGlow = styled.div`
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  background-color: var(--accent-2);
  border-radius: 50%;
  width: 20px;
  height: 20px;
  filter: blur(12px);
`;

export const ThemeSwitch: React.FC<SwitchProps> = ({
  isActive,
  theme,
  handleClick,
}) => {
  const blueSwitch = (
    <SwitchContainer>
      <BlueThemeSwitch />
    </SwitchContainer>
  );

  const blueSwitchIndicator = (
    <SwitchIndicator>
      <BlueActiveIndicator />
    </SwitchIndicator>
  );

  const purpleSwitch = (
    <SwitchContainer>
      <PurpleThemeSwitch />
    </SwitchContainer>
  );

  const purpleSwitchIndicator = (
    <SwitchIndicator>
      <PurpleActiveIndicator />
    </SwitchIndicator>
  );

  const greenSwitch = (
    <SwitchContainer>
      <GreenThemeSwitch />
    </SwitchContainer>
  );

  const greenSwitchIndicator = (
    <SwitchIndicator>
      <GreenActiveIndicator />
    </SwitchIndicator>
  );

  return (
    <ThemeButton
      type="button"
      aria-label={`${theme} theme button`}
      onClick={() => handleClick(theme)}
    >
      {isActive ? <BlueGlow /> : null}
      <>
        {theme === "blue"
          ? blueSwitch
          : theme === "purple"
          ? purpleSwitch
          : greenSwitch}
      </>
      {isActive ? (
        <>
          {theme === "blue"
            ? blueSwitchIndicator
            : theme === "purple"
            ? purpleSwitchIndicator
            : greenSwitchIndicator}
        </>
      ) : null}
    </ThemeButton>
  );
};
