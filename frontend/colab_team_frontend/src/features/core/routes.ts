import { RouteObject } from "react-router-dom";

const coreRoutes: RouteObject = {
  children: [
    { index: true, lazy: () => import("./pages/Home") },
    { path: "*", lazy: () => import("./pages/404") },
  ],
};

export default coreRoutes;
