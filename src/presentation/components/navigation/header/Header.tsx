import ProfileDropdown from "../../profile/ProfileDropdown";


type Props = {
  isSticky?: boolean;
};

export default function Header({ isSticky }: Props) {
  const headerState = {
    isSticky: isSticky || false,
  };

  return (
    <div className="flex z-10 h-16 border-b border-gray-200 flex-shrink-0 px-4">
      <div className="flex h-full flex-1 justify-end px-4">
        <div className="flex items-center justify-end">
          <ProfileDropdown />
        </div>
      </div>
    </div>
  );
}
