import { createBrowserRouter } from "react-router-dom";

import authRoutes from "~/features/auth/routes";
import coreRoutes from "~/features/core/routes";
import projectRoutes from "~/features/projects/routes";
import userRoutes from "~/features/user/routes";

const router = createBrowserRouter([
  coreRoutes,
  authRoutes,
  projectRoutes,
  userRoutes,
]);

export default router;
