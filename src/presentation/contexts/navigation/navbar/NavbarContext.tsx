import { createContext } from "react";
import { NavbarContext as NavbarContextInterface } from "../../shared/interface/NavbarContext.interface";
import { navigationElementsExample } from "../../../components/navigation/navbar/sideNavbar/data/navigationElements.example";
import { useNavbar } from "../../../hooks/navigation/navbar/useNavbar";

interface NavbarContextProviderProps {
  children: React.ReactNode;
}

export const NavbarContext = createContext<NavbarContextInterface>({
  navbarNavigationElements: navigationElementsExample,
  setCurrentNavigationElement: () => [],
});

export const NavbarContextProvider = ({
  children,
}: NavbarContextProviderProps) => {
  const { navbarNavigationElements, setCurrentNavigationElement } = useNavbar();

  return (
    <NavbarContext.Provider
      value={{ navbarNavigationElements, setCurrentNavigationElement }}
    >
      {children}
    </NavbarContext.Provider>
  );
};
