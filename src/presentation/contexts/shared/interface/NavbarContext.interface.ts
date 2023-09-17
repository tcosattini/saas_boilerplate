import { NavbarNavigationElement } from "../../../shared/interfaces/navigation/navbar.interface";

export interface NavbarContext {
  navbarNavigationElements: Array<NavbarNavigationElement>;
  setCurrentNavigationElement: (element: NavbarNavigationElement) => void;
  setIsNarrow: (isNarrow: boolean) => void;
  isNarrow: boolean;
  displayedNavbar: JSX.Element;
  navbarDependingWidth: (width: number) => void;
}
