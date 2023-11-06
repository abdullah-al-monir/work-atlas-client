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
      {
        path: "/job/:id",
        element: <JobDetails />,
        loader: ({ params }) => fetch(`http://localhost:7000/job/${params.id}`),
      },
      {
        path: "/update/:id",
        element: <Update />,
        loader: ({ params }) => fetch(`http://localhost:7000/job/${params.id}`),
      },
    ],
  },
]);

export default Route;
