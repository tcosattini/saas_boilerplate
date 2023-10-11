import { Dashboard } from "../presentation/pages/Dashboard";
import Example from "../presentation/pages/example/Example";
import NotFoundPage from "../presentation/pages/not-found/NotFoundPage";
import { ROUTE_EXAMPLE, ROUTE_HOME } from "./routes.const";

const routes = [
  {
    path: ROUTE_HOME,
    element: <Dashboard />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: ROUTE_EXAMPLE,
        element: <Example />,
      },
    ],
  },
];
export default routes;
