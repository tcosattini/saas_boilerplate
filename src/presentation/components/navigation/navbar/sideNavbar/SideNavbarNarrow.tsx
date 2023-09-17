import { useContext } from "react";
import { NavbarContext } from "../../../../contexts/navigation/navbar/NavbarContext";
import { ChevronDoubleRightButton } from "../../../button/special-button/ChevronDoubleRightButton";

export default function SideNavbarNarrow() {
  // TODO CHANGE THIS SHIT
  function classNames(...classes: any) {
    return classes.filter(Boolean).join(" ");
  }
  const { setCurrentNavigationElement, navbarNavigationElements, setIsNarrow } =
    useContext(NavbarContext);
  return (
    <div className="h-screen inset-y-0 flex flex-col">
      <a
        href="#"
        className="flex h-24 w-20 items-center justify-center bg-light-primary focus:outline-none"
      >
        <img
          className="h-8 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=white"
          alt="Your Company"
        />
      </a>

      <nav
        aria-label="Sidebar"
        className=" flex flex-col flex-grow bg-light-primary  w-20"
      >
        <div className="relative flex w-20 flex-col space-y-3 p-3">
          {navbarNavigationElements?.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setCurrentNavigationElement(item)}
              className={classNames(
                item.current
                  ? "bg-light-selected text-white"
                  : "text-white hover:bg-light-hover",
                "flex-shrink-0 inline-flex items-center justify-center h-14 w-14 rounded-lg"
              )}
            >
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </a>
          ))}
        </div>
        <div className="flex h-full pb-2  items-end justify-center">
          <ChevronDoubleRightButton onClick={() => setIsNarrow(false)} />
        </div>
      </nav>
    </div>
  );
}
