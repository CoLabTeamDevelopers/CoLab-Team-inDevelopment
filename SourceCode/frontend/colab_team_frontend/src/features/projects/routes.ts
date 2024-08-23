import { RouteObject } from "react-router-dom";

const projectRoutes: RouteObject = {
  path: "projects",
  lazy: () => import("~layouts/AppLayout"),
  children: [
    { index: true, lazy: () => import("../projects/pages/ProjectsList") },
    { path: ":project_id", lazy: () => import("../projects/pages/Project") },
    { path: "create", lazy: () => import("../projects/pages/CreateProject") },
  ],
};

export default projectRoutes;
