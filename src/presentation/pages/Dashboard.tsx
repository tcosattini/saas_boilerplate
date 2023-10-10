import { useState } from "react";
import Modal from "../components/modal/Modal";
import Header from "../components/navigation/header/Header";
import SideNavbar from "../components/navigation/navbar/sideNavbar/SideNavbar";
import { NavbarContextProvider } from "../contexts/navigation/navbar/NavbarContext";

export const Dashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleClick = () => {
    setIsModalOpen(!isModalOpen);
  };

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
