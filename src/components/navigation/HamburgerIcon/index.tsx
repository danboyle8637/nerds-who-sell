import { BlueHamburgerIcon } from "./BlueBurger";
import { PurpleHamburgerIcon } from "./PurpleBurger";
import { MatrixHamburgerIcon } from "./MatrixBurger";
import { siteThemeStore } from "../../../../lib/siteThemeStore";

interface HamburgerIconProps {
  handleClick: () => void;
}

export const HamburgerIcon: React.FC<HamburgerIconProps> = ({
  handleClick,
}) => {
  const activeTheme = siteThemeStore((state) => state.activeTheme);

  return (
    <>
      {activeTheme === "blue" ? (
        <BlueHamburgerIcon handleClick={handleClick} />
      ) : activeTheme === "green" ? (
        <MatrixHamburgerIcon handleClick={handleClick} />
      ) : (
        <PurpleHamburgerIcon handleClick={handleClick} />
      )}
    </>
  );
};
