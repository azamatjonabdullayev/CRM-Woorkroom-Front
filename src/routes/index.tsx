import { createBrowserRouter } from "react-router-dom";
import AppWrapperLayout from "../layouts/AppWrapperLayout";
import Rootlayout from "../layouts/Rootlayout";
import DashboardPage from "../pages/DashboardPage";
import SignInPage from "../pages/SignInPage";
import RegisterPage from "../pages/RegisterPage";

export const AllRoutes = createBrowserRouter([
  {
    path: "/",
    element: <AppWrapperLayout />,
    children: [
      {
        path: "",
        element: <Rootlayout />,
        children: [
          {
            index: true,
            element: <DashboardPage />,
          },
          {
            path: "/projects",
            element: <h1>These are projeeeeeects</h1>,
          },
          {
            path: "/calendar",
            element: <h1>These are calendar</h1>,
          },
          {
            path: "/vacations",
            element: <h1>These are vacations</h1>,
          },
          {
            path: "/employees",
            element: <h1>These are employees</h1>,
          },
          {
            path: "/messenger",
            element: <h1>These are messenger</h1>,
          },
          {
            path: "/info-portal",
            element: <h1>These are info-portal</h1>,
          },
        ],
      },

      {
        path: "/login",
        element: <SignInPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
    ],
  },
]);
