import { LoaderFunction, redirect, RouteObject } from "react-router-dom";

import store from "@/app/store";

const loader: LoaderFunction = ({ request }) => {
  const isAuthenticated = store.getState().auth.authenticated;

  if (!isAuthenticated) {
    const parameters = new URLSearchParams();
    parameters.set("from", new URL(request.url).pathname);
    return redirect("/login?" + parameters.toString());
  }

  // React Router only accepts null for a return value
  // eslint-disable-next-line unicorn/no-null
  return null;
};

const userRoutes: RouteObject = {
  path: "profile",
  lazy: () => import("@/common/layouts/AppLayout"),
  loader,
  children: [
    { index: true, lazy: () => import("./pages/Profile") },
    { path: "projects", lazy: () => import("./pages/MyProjects") },
    { path: "requests", lazy: () => import("./pages/Request") },
  ],
};

export default userRoutes;
