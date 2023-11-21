import { RouteObject } from "react-router-dom";

const userRoutes: RouteObject = {
  path: "profile",
  children: [
    { index: true, lazy: () => import("./pages/Profile") },
    { path: "my-projects", lazy: () => import("./pages/MyProjects") },
    { path: "requests", lazy: () => import("./pages/Request") },
  ],
};

export default userRoutes;
