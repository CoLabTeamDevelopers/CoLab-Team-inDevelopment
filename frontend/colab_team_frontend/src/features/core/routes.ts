import { RouteObject } from "react-router-dom";

const coreRoutes: RouteObject[] = [
  { index: true, lazy: () => import("./pages/Home") },
  { path: "*", lazy: () => import("./pages/404") },
];

export default coreRoutes;
