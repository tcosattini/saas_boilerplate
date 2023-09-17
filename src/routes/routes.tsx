import { Dashboard } from "../presentation/pages/Dashboard";
import NotFoundPage from "../presentation/pages/not-found/NotFoundPage";
import { ROUTE_HOME } from "./routes.const";

const routes = [
  {
    path: "*",
    element: <NotFoundPage />,
  },
  {
    path: ROUTE_HOME,
    children: [{ index: true, element: <Dashboard /> }],
  },
];
export default routes;
