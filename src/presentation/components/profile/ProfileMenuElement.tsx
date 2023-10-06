import { IProfileMenuElement } from "../../shared/interfaces/navigation/profileMenu.interface";

export default function ProfileMenuElement({
  profileMenuElement,
}: IProfileMenuElement) {
  return (
    <a
      className="block px-4 py-2 text-sm text-gray-700"
      role="menuitem"
      id={`user-menu-item-2${profileMenuElement.id}`}
      href={profileMenuElement.href}
    >
      {profileMenuElement.id}
    </a>
  );
}
