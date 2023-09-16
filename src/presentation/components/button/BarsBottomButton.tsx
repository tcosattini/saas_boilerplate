import { Bars3BottomLeftIcon } from "@heroicons/react/24/outline";

interface BarsBottomButtonProps {
  onClick: () => void;
}

export const BarsBottomButton = ({ onClick }: BarsBottomButtonProps) => {
  return (
    <button
      type="button"
      className="border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
      onClick={onClick}
    >
      <span className="sr-only">Open sidebar</span>
      <Bars3BottomLeftIcon className="h-6 w-6" aria-hidden="true" />
    </button>
  );
};
