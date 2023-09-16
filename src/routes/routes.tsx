import { Dashboard } from "../pages/Dashboard";

const routes = [
  {
    path: "/",
    children: [{ index: true, element: <Dashboard /> }],
  },
];
export default routes;
