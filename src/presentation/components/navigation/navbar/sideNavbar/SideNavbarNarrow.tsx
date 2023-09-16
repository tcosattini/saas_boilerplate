import { useContext } from "react";
import { NavbarContext } from "../../../../contexts/navigation/navbar/NavbarContext";

export default function SideNavbarNarrow() {
  // TODO CHANGE THIS SHIT
  function classNames(...classes: any) {
    return classes.filter(Boolean).join(" ");
  }
  const { setCurrentNavigationElement, navbarNavigationElements } =
    useContext(NavbarContext);
  return (
    <div className="absolute inset-y-0 left-0 md:static md:flex-shrink-0">
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
        className="md:overflow-y-auto bg-light-primary h-[100vh] w-20"
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
      </nav>
    </div>
  );
}
