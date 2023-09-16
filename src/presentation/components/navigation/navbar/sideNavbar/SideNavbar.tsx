import { useEffect } from "react";
import { useNavbar } from "../../../../hooks/navigation/navbar/useNavbar";
import { NavbarContextProvider } from "../../../../contexts/navigation/navbar/NavbarContext";

//dependencies
import { useWindowWidth } from "@react-hook/window-size";

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
