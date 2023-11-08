import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AllJobs from "../pages/All Jobs/AllJobs";
import MyJobs from "../pages/My Jobs/MyJobs";
import AddJob from "../pages/Add A Job/AddJob";
import AppliedJobs from "../pages/Applieid Jobs/AppliedJobs";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import JobDetails from "../components/Job Section/JobDetails";
import Update from "../components/Update";
import PrivateRoute from "./PrivateRoute";
import Blogs from "../pages/Blogs/Blogs";

const Route = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
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
        element: (
          <PrivateRoute>
            <AppliedJobs />
          </PrivateRoute>
        ),
      },
      {
        path: "/myJobs",
        element: (
          <PrivateRoute>
            <MyJobs />
          </PrivateRoute>
        ),
      },
      {
        path: "/addJob",
        element: (
          <PrivateRoute>
            <AddJob />
          </PrivateRoute>
        ),
      },
      {
        path: "/job/:id",
        element: (
          <PrivateRoute>
            <JobDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) => fetch(`https://work-atlas-server.vercel.app/job/${params.id}`),
      },
      {
        path: "/update/:id",
        element: (
          <PrivateRoute>
            <Update />
          </PrivateRoute>
        ),
        loader: ({ params }) => fetch(`https://work-atlas-server.vercel.app/job/${params.id}`),
      },
    ],
  },
]);

export default Route;
