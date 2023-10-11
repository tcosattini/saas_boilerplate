import { Outlet } from "react-router-dom";
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
        <div className="flex-col flex-grow">
          <Header isSticky={true} />
          <Outlet />
        </div>
      </div>
    </>
  );
};
