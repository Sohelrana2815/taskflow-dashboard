import { createBrowserRouter } from "react-router";
import Login from "../components/login/Login";
import Dashboard from "../components/dashboard/Dashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Login,
    index: true,
  },
  {
    path: "/dashboard",
    Component: Dashboard,
  },
]);
