import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Registration from "../Pages/Registration/Registration";
import Login from "../Pages/Login/Login";
import DashboardHome from "../Pages/Dashboard/DashboardPages/DashboardHome/DashboardHome";
import DashHomeCompo from "../Pages/Dashboard/DashboardComponents/DashHomeCompo/DashHomeCompo";
import ClassAddForm from "../Pages/Dashboard/DashboardPages/ClassAddForm/ClassAddForm";

export const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "registration",
        element: <Registration />,
      },
    ],
  },
  {
    path: "dashboard",
    element: <DashboardHome />,
    children: [
      {
        path: "/dashboard",
        element: <DashHomeCompo />,
      },
      {
        path: "/dashboard/addAClass",
        element: <ClassAddForm />,
      },
    ],
  },
]);
