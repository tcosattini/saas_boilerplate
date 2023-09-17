import SideNavbar from "../components/navigation/navbar/sideNavbar/SideNavbar";
import { NavbarContextProvider } from "../contexts/navigation/navbar/NavbarContext";

export const Dashboard = () => {
  return (
    <>
      <NavbarContextProvider>
        <SideNavbar />
      </NavbarContextProvider>
    </>
  );
};
