import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Registration from "../Pages/Registration/Registration";
import Login from "../Pages/Login/Login";
import DashboardHome from "../Pages/Dashboard/DashboardPages/DashboardHome/DashboardHome";
import DashHomeCompo from "../Pages/Dashboard/DashboardComponents/DashHomeCompo/DashHomeCompo";
import ClassAddForm from "../Pages/Dashboard/DashboardPages/ClassAddForm/ClassAddForm";
import Instructors from "../Pages/Instructors/Instructors";
import AllClasses from "../Pages/AllClasses/AllClasses";
import PrivetRoute from "./PrivetRoute";
import AllUsers from "../Pages/Dashboard/DashboardPages/AllUsers/AllUsers";
import MyClasses from "../Pages/Dashboard/DashboardPages/MyClasses/MyClasses";
import SelectedClasses from "../Pages/Dashboard/DashboardPages/SelectedClasses/SelectedClasses";
import EnroledClass from "../Pages/Dashboard/DashboardPages/EnroledClass/EnroledClass";

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
        path: "instructor",
        element: <Instructors />,
      },
      {
        path: "classes",
        element: <AllClasses />,
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
        path: "/dashboard/selectedClass",
        element: <SelectedClasses />,
      },
      {
        path: "/dashboard/enrolled",
        element: <EnroledClass />,
      },
      {
        path: "/dashboard/addAClass",
        element: <ClassAddForm />,
      },
      {
        path: "/dashboard/myClasses",
        element: <MyClasses />,
      },
      {
        path: "/dashboard/allUsers",
        element: <AllUsers />,
      },
    ],
  },
]);
