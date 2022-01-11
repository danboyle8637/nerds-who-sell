import styled from "styled-components";

import { ThemeLabel } from "../../images/themeSwitcher/ThemeLabel";
import { ThemeSwitch } from "./ThemeSwitch";
import { siteThemeStore } from "../../../../lib/siteThemeStore";
import { SiteTheme } from "../../../types/components";

const ToggleContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;
  gap: 4px;
  justify-items: center;
  width: fit-content;
`;

const LabelContainer = styled.div`
  width: 60px;
`;

const ButtonsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 6px;
  width: 100%;
`;

export const ThemeSwitcher = () => {
  const { activeTheme, updateActiveTheme } = siteThemeStore((state) => ({
    activeTheme: state.activeTheme,
    updateActiveTheme: state.updateActiveTheme,
  }));

  const setActiveSiteTheme = (theme: SiteTheme) => {
    updateActiveTheme(theme);
    localStorage.setItem("nerdTheme", theme);
  };

  return (
    <ToggleContainer>
      <LabelContainer>
        <ThemeLabel />
      </LabelContainer>
      <ButtonsContainer>
        <ThemeSwitch
          theme="blue"
          isActive={activeTheme === "blue"}
          handleClick={setActiveSiteTheme}
        />
        <ThemeSwitch
          theme="purple"
          isActive={activeTheme === "purple"}
          handleClick={setActiveSiteTheme}
        />
        <ThemeSwitch
          theme="green"
          isActive={activeTheme === "green"}
          handleClick={setActiveSiteTheme}
        />
      </ButtonsContainer>
    </ToggleContainer>
  );
};
