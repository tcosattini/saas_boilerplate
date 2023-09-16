import { Dashboard } from "../presentation/pages/Dashboard";
import { ROUTE_HOME } from "./routes.const";

const routes = [
  {
    path: ROUTE_HOME,
    children: [{ index: true, element: <Dashboard /> }],
  },
];
export default routes;
