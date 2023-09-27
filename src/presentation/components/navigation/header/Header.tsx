import ProfileDropdown from "../../profile/ProfileDropdown";

export default function Header() {
  return (
    <div className="flex flex-grow z-10 h-16 border-b border-gray-200  flex-shrink-0 bg-white">
      <div className="flex flex-1 justify-end px-4">
        <div className="flex items-center justify-end">
          <ProfileDropdown />
        </div>
      </div>
    </div>
  );
}
