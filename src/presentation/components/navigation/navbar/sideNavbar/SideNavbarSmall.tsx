import { Fragment } from "react";
import { useNavbar } from "../../../../hooks/navigation/navbar/useNavbar";

//Tailwind dependencies
import { Dialog } from "@headlessui/react";

export default function SideNavbarSmall() {
  const { setCurrentNavigationElement, navbarNavigationElements } = useNavbar();

  return (
    <>
      <Dialog
        as="div"
        className="relative z-40 md:hidden"
        onClose={() => {}}
        open={true}
      >
        <div className="hidden sm:fixed sm:inset-0 sm:block sm:bg-gray-600 sm:bg-opacity-75" />

        <div className="fixed inset-0 z-40">
          <Dialog.Panel
            className="fixed inset-0 z-40 h-full w-full bg-white sm:inset-y-0 sm:left-auto sm:right-0 sm:w-full sm:max-w-sm sm:shadow-lg"
            aria-label="Global"
          >
            <div className="flex h-16 items-center justify-between px-4 sm:px-6">
              <a href="#">
                <img
                  className="block h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                  alt="Your Company"
                />
              </a>
            </div>

            <div className="max-w-8xl mx-auto py-3 px-2 sm:px-4">
              {navbarNavigationElements?.map((item) => (
                <Fragment key={item.name}>
                  <a
                    href={item.href}
                    className="block rounded-md py-2 px-3 text-base font-medium text-gray-900 hover:bg-gray-100"
                    onClick={() => setCurrentNavigationElement(item)}
                  >
                    {item.name}
                  </a>
                </Fragment>
              ))}
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
}
