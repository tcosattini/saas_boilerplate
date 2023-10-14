import SimpleTable from "../../components/lists/tables/simple-table/SimpleTable";
import SimpleSlideOver from "../../components/overlays/slide-overs/simple-slide-over/SimpleSlideOver";
import DashboardWrapper from "../dashboard-wrapper/DashboardWrapper";

export default function ExamplePage() {
  return (
    <>
      <DashboardWrapper>
        <SimpleTable />
        <SimpleSlideOver />
      </DashboardWrapper>
    </>
  );
}
