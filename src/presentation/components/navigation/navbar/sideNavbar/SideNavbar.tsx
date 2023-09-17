import { useContext, useEffect } from "react";

//dependencies
import { useWindowWidth } from "@react-hook/window-size";
import { NavbarContext } from "../../../../contexts/navigation/navbar/NavbarContext";

export default function SideNavbar() {
  const { displayedNavbar, isNarrow, navbarDependingWidth } =
    useContext(NavbarContext);
  const width = useWindowWidth();

  useEffect(() => {
    navbarDependingWidth(width);
  }, [width, isNarrow]);

  return <>{displayedNavbar}</>;
}
