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
            path: "projects",
            element: <h1>These are projeeeeeects</h1>,
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
