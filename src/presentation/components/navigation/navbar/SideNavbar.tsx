import { useEffect } from "react";
import { useNavbar } from "../../../hooks/navigation/navbar/useNavabar";

//dependencies
import { useWindowWidth } from "@react-hook/window-size";
import { NavbarContextProvider } from "../../../contexts/navigation/navbar/NavbarContext";

export default function SideNavbar() {
  const { navbarDependingWidth, displayedNavbar } = useNavbar();

  const width = useWindowWidth();

  useEffect(() => {
    navbarDependingWidth(width);
  }, [width]);

  return (
    <>
      <NavbarContextProvider>{displayedNavbar}</NavbarContextProvider>
    </>
  );
}
