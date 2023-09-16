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

  const displayNavbarDependingWidth = (width: number): void => {
    if (width <= 760) return setDisplayedNavbar(<SideNavbarSmall />);
    if (width > 760 && width <= 1024)
      return setDisplayedNavbar(<SideNavbarNarrow />);
    else return setDisplayedNavbar(<SideNavbarDesktop />);
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
  };
}
