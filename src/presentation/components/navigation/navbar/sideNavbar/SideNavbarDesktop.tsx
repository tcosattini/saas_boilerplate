import { useContext } from "react";
import { NavbarNavigationElement } from "../../../../shared/interfaces/navigation/navbar.interface";
import { NavbarContext } from "../../../../contexts/navigation/navbar/NavbarContext";
import { ChevronDoubleLeftButton } from "../../../buttons/special-button/ChevronDoubleLeftButton";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function SideNavbarDesktop() {
  const { setCurrentNavigationElement, navbarNavigationElements, setIsNarrow } =
    useContext(NavbarContext);

  return (
    <>
      <div className="inset-y-0 h-screen sticky flex w-64 flex-col">
        <div className="flex flex-grow flex-col overflow-y-auto bg-light-primary ">
          <a
            href="#"
            className="flex h-16 w-20 items-center justify-center bg-light-primary focus:outline-none"
          >
            <img
              className="h-8 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=white"
              alt="Your Company"
            />
          </a>

          <div className="mt-5 flex flex-1 flex-col">
            <nav className="flex-1 space-y-1 px-2 pb-4">
              {navbarNavigationElements?.map(
                (item: NavbarNavigationElement) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setCurrentNavigationElement(item)}
                    className={classNames(
                      item.current
                        ? "bg-light-selected text-white"
                        : "text-indigo-100 hover:bg-light-hover",
                      "group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                    )}
                  >
                    <item.icon
                      className="mr-3 h-6 w-6 flex-shrink-0 text-white"
                      aria-hidden="true"
                    />
                    {item.name}
                  </a>
                )
              )}
            </nav>
          </div>
          <div className="flex flex-shrink-0 pb-2 justify-end">
            <ChevronDoubleLeftButton onClick={() => setIsNarrow(true)} />
          </div>
        </div>
      </div>
    </>
  );
}
