interface MediumButtonProps {
  title?: string;
  onClick?: () => void;
  children?: JSX.Element;
}

export default function MediumButton({
  title,
  onClick,
  children,
}: MediumButtonProps) {
  return (
    <button
      onClick={onClick}
      className="rounded-md bg-light-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-light-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    >
      {title}
      {children}
    </button>
  );
}
