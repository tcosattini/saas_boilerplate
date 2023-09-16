import { NavbarNavigationElement } from "../../../shared/interfaces/navigation/navbar.interface";

export interface NavbarContext {
  navbarNavigationElements: Array<NavbarNavigationElement>;
  setCurrentNavigationElement: (element: NavbarNavigationElement) => void;
}
