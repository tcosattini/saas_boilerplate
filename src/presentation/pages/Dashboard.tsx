import Header from "../components/navigation/header/Header";
import SideNavbar from "../components/navigation/navbar/sideNavbar/SideNavbar";
import { NavbarContextProvider } from "../contexts/navigation/navbar/NavbarContext";

export const Dashboard = () => {
  return (
    <>
      <div className="flex">
        <NavbarContextProvider>
          <SideNavbar />
        </NavbarContextProvider>
        <Header />
      </div>
    </>
  );
};
