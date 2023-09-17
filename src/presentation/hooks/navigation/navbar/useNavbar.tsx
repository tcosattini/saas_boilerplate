import { useState } from "react";
import SideNavbarNarrow from "../../../components/navigation/navbar/sideNavbar/SideNavbarNarrow";
import SideNavbarSmall from "../../../components/navigation/navbar/sideNavbar/SideNavbarSmall";
import SideNavbarDesktop from "../../../components/navigation/navbar/sideNavbar/SideNavbarDesktop";
import { NavbarNavigationElement } from "../../../shared/interfaces/navigation/navbar.interface";
import { navigationElementsExample } from "../../../components/navigation/navbar/sideNavbar/data/navigationElements.example";

export function useNavbar() {
  const [navbarNavigationElements, setNavbarNavigationElements] = useState<
    Array<NavbarNavigationElement>
  >(navigationElementsExample);

  const [displayedNavbar, setDisplayedNavbar] = useState<JSX.Element>(
    <SideNavbarDesktop />
  );
  const [isNarrow, setIsNarrow] = useState<boolean>(true);

  const displayNavbarDependingWidth = (width: number): void => {
    if (width <= 760) return setDisplayedNavbar(<SideNavbarSmall />);
    else if (isNarrow) return setDisplayedNavbar(<SideNavbarNarrow />);
    return setDisplayedNavbar(<SideNavbarDesktop />);
  };

  const setCurrentNavigationElement = (
    navbarNavigationElement: NavbarNavigationElement
  ) => {
    const updatedNavigationElements = navbarNavigationElements.map(
      (element) => ({
        ...element,
        current: element === navbarNavigationElement,
      })
    );
    return setNavbarNavigationElements(updatedNavigationElements);
  };
  return {
    navbarDependingWidth: (width: number) => displayNavbarDependingWidth(width),
    displayedNavbar,
    navbarNavigationElements,
    setCurrentNavigationElement,
    setIsNarrow,
    isNarrow,
  };
}
