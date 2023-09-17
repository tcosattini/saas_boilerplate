import { ChevronDoubleRightIcon } from "@heroicons/react/20/solid";

interface BarsBottomButtonProps {
  onClick: () => void;
}

export const ChevronDoubleRightButton = ({
  onClick,
}: BarsBottomButtonProps) => {
  return (
    <button
      type="button"
      className="px-4 font-bold text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-light-primary"
      onClick={onClick}
    >
      <ChevronDoubleRightIcon className="h-6 w-6" aria-hidden="true" />
    </button>
  );
};
