import { createContext } from "react";
import { NavbarContext as NavbarContextInterface } from "../../shared/interface/NavbarContext.interface";
import { navigationElementsExample } from "../../../components/navigation/navbar/sideNavbar/data/navigationElements.example";
import { useNavbar } from "../../../hooks/navigation/navbar/useNavbar";
import SideNavbarNarrow from "../../../components/navigation/navbar/sideNavbar/SideNavbarNarrow";

interface NavbarContextProviderProps {
  children: React.ReactNode;
}

const initialContext = {
  navbarNavigationElements: navigationElementsExample,
  setCurrentNavigationElement: () => [],
  setIsNarrow: () => {},
  isNarrow: true,
  displayedNavbar: <SideNavbarNarrow />,
  navbarDependingWidth: () => {},
  changeDesktopNavbarSize: () => {},
};

export const NavbarContext =
  createContext<NavbarContextInterface>(initialContext);

export const NavbarContextProvider = ({
  children,
}: NavbarContextProviderProps) => {
  const {
    navbarNavigationElements,
    setCurrentNavigationElement,
    setIsNarrow,
    displayedNavbar,
    isNarrow,
    navbarDependingWidth,
    changeDesktopNavbarSize,
  } = useNavbar();

  return (
    <NavbarContext.Provider
      value={{
        navbarNavigationElements,
        setCurrentNavigationElement,
        setIsNarrow,
        isNarrow,
        displayedNavbar,
        navbarDependingWidth,
        changeDesktopNavbarSize,
      }}
    >
      {children}
    </NavbarContext.Provider>
  );
};
