import { Dialog } from "@headlessui/react";
import { useState } from "react";
import { profileMenuElements } from "./data/profileMenuElements.example";
import { IProfileMenuElement } from "../../shared/interfaces/navigation/profileMenu.interface";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";

export default function ProfileDropdown() {
  const [isDropDownOpen, setIsDropDownOpen] = useState<boolean>(false);
  function handleClick() {
    setIsDropDownOpen(!isDropDownOpen);
  }
  return (
    <>
      <div className="flex items-center w-full">
        <img
          className="h-8 w-8 rounded-full"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
        <button
          type="button"
          className="relative flex rounded-full text-sm items-center h-full"
          id="user-menu-button"
          aria-expanded="false"
          aria-haspopup="true"
          onClick={handleClick}
        >
          <span className="absolute -inset-1.5"></span>
          <span className="ml-2">Demo user </span>
          {isDropDownOpen ? (
            <ChevronUpIcon className="ml-2 w-4 h-4" />
          ) : (
            <ChevronDownIcon className="ml-2 w-4 h-4" />
          )}
        </button>
      </div>
      <Dialog open={isDropDownOpen} onClose={setIsDropDownOpen}>
        <Dialog.Panel
          className="absolute right-8 top-14 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
        >
          {profileMenuElements.map(
            (profileMenuElement: IProfileMenuElement) => (
              <a
                className="block px-4 py-2 text-sm text-gray-700"
                role="menuitem"
                id={`user-menu-item-2${profileMenuElement.id}`}
                href={profileMenuElement.href}
                key={profileMenuElement.id}
              >
                {profileMenuElement.title}
              </a>
            )
          )}
        </Dialog.Panel>
      </Dialog>
    </>
  );
}
