import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { useContext } from "react";
import { Spinner } from "@material-tailwind/react";
import Swal from "sweetalert2";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return (
      <div className="flex justify-center items-center h-[100vh]">
        <Spinner className="h-10 w-10 text-center text-primary" />
      </div>
    );
  }
  if (user) {
    return children;
  } else {
    Swal.fire("Sorry!", "You have to login to access this page", "error");
  }
  return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default PrivateRoute;
