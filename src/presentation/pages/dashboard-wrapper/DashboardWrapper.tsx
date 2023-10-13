type Props = {
  children: React.ReactNode;
};

export default function DashboardWrapper({ children }: Props) {
  return (
    <div className="py-8">
      <div className="mx-auto px-8">
        <div className="py-1">
          <div className="h-screen  border border-gray-200 flex-grow">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
