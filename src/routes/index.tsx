import { createBrowserRouter } from "react-router";
import LoginPage from "../components/login/LoginPage";
import Dashboard from "../components/dashboard/Dashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: LoginPage,
    index: true,
  },
  {
    path: "/dashboard",
    Component: Dashboard,
  },
]);
