type Props = {
  children?: React.ReactNode;
};

export default function DashboardWrapper({ children }: Props) {
  return (
    <div className="py-8">
      <div className="mx-auto px-8">
        <div className="py-1">
          {children ? (
            children
          ) : (
            <div className="h-screen  border border-gray-200 flex-grow">
              <div
                className="h-full w-full pattern-diagonal-lines pattern-blue-500 pattern-bg-white 
  pattern-size-2 pattern-opacity-20"
              ></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
