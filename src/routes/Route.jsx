import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AllJobs from "../pages/All Jobs/AllJobs";
import MyJobs from "../pages/My Jobs/MyJobs";
import AddJob from "../pages/Add A Job/AddJob";
import AppliedJobs from "../pages/Applieid Jobs/AppliedJobs";

const Route = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/allJobs",
        element: <AllJobs />,
      },
      {
        path: "/appliedJobs",
        element: <AppliedJobs />,
      },
      {
        path: "/myJobs",
        element: <MyJobs />,
      },
      {
        path: "/addJob",
        element: <AddJob />,
      },
    ],
  },
]);

export default Route;
