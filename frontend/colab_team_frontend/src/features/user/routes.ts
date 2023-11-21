import { RouteObject } from "react-router-dom";

const userRoutes: RouteObject = {
  path: "profile",
  lazy: () => import("@/common/layouts/AppLayout"),
  children: [
    { index: true, lazy: () => import("./pages/Profile") },
    { path: "projects", lazy: () => import("./pages/MyProjects") },
    { path: "requests", lazy: () => import("./pages/Request") },
  ],
};

export default userRoutes;
