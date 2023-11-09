import { useContext, useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import logo from "/workatlas.png";
import Swal from "sweetalert2";

function Navbar() {
  const { user, logOut, loading } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const navigate = useNavigate();
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const handleLogOut = () => {
    logOut();
    navigate("/");
    Swal.fire("Success!", "User logged out successfully", "success");
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? " block py-1 lg:py-2 pl-3 pr-4 md:bg-transparent  md:p-0 text-secondary mx-1.5 sm:mx-6"
              : " block py-1 lg:py-2 pl-3 pr-4 md:bg-transparent text-primary hover:text-secondary md:p-0 mx-1.5 sm:mx-6"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/allJobs"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? " block py-1 lg:py-2 pl-3 pr-4 md:bg-transparent  md:p-0 text-secondary mx-1.5 sm:mx-6"
              : " block py-1 lg:py-2 pl-3 pr-4 md:bg-transparent text-primary hover:text-secondary md:p-0 mx-1.5 sm:mx-6"
          }
        >
          All Jobs
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/blogs"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? " block py-1 lg:py-2 pl-3 pr-4 md:bg-transparent  md:p-0 text-secondary mx-1.5 sm:mx-6"
              : " block py-1 lg:py-2 pl-3 pr-4 md:bg-transparent text-primary hover:text-secondary md:p-0 mx-1.5 sm:mx-6"
          }
        >
          Blogs
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/appliedJobs"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? " block py-1 lg:py-2 pl-3 pr-4 md:bg-transparent  md:p-0 text-secondary mx-1.5 sm:mx-6"
              : " block py-1 lg:py-2 pl-3 pr-4 md:bg-transparent text-primary hover:text-secondary md:p-0 mx-1.5 sm:mx-6"
          }
        >
          Applied Jobs
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/addJob"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? " block py-1 lg:py-2 pl-3 pr-4 md:bg-transparent  md:p-0 text-secondary mx-1.5 sm:mx-6"
              : " block py-1 lg:py-2 pl-3 pr-4 md:bg-transparent text-primary hover:text-secondary md:p-0 mx-1.5 sm:mx-6"
          }
        >
          Add Job
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/myJobs"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? " block py-1 lg:py-2 pl-3 pr-4 md:bg-transparent  md:p-0 text-secondary mx-1.5 sm:mx-6"
              : " block py-1 lg:py-2 pl-3 pr-4 md:bg-transparent text-primary hover:text-secondary md:p-0 mx-1.5 sm:mx-6"
          }
        >
          My Jobs
        </NavLink>
      </li>
      {user ? (
        <>
          <li>
            <button
              onClick={handleLogOut}
              className="font-semibold text-white bg-primary hover:bg-secondary py-2 px-4 rounded-lg lg:hidden mx-4 my-1 duration-300"
            >
              Log Out
            </button>
          </li>
        </>
      ) : (
        <li>
          <button className="font-semibold text-white lg:hidden py-1 pl-3 mx-2">
            <NavLink
              to="/login"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? " block  bg-secondary py-1 px-4  rounded-lg"
                  : " block  bg-primary hover:bg-secondary py-1 px-4 rounded-lg duration-300"
              }
            >
              Login
            </NavLink>
          </button>
        </li>
      )}
    </>
  );

  return (
    <nav
      className={` bg-white shadow shadow-secondary z-50 border-b-2 border-b-primary  ${
        isSticky ? "sticky top-0" : ""
      }`}
    >
      <div className="container px-6 py-4 mx-auto lg:flex lg:justify-between lg:items-center">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img className="w-auto h-6 sm:h-7" src={logo} alt="" />
            <h2
              className="font-extrabold text-2xl uppercase stylish"
              style={{
                background: `linear-gradient(90deg, #9f00a5, #d62fb3)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Work Atlas
            </h2>
          </Link>
          <div className="flex gap-2 lg:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="text-primary  hover:text-secondary  focus:outline-none focus:text-gray-600"
              aria-label="toggle menu"
            >
              {!isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="#9f00a5"
                  viewBox="0 0 24 24"
                  stroke="#9f00a5"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 8h16M4 16h16"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="#9f00a5"
                  viewBox="0 0 24 24"
                  stroke="#9f00a5"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
            {user && (
              <div className="group inline-block relative">
                <img
                  className="w-14 h-14 rounded-full"
                  src={user.photoURL}
                  alt=""
                />
                <div className="hidden group-hover:flex justify-center items-center bg-primary text-white text-xs rounded p-1 absolute  left-1/2 -translate-x-1/2 w-28">
                  {user.displayName}
                </div>
              </div>
            )}
          </div>
        </div>
        <div
          className={`${
            isOpen ? "translate-x-0 opacity-100" : "opacity-0 -translate-x-full"
          } absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center `}
        >
          <ul className="flex flex-col lg:flex-row lg:mx-6 lg:text-lg font-semibold">
            {navLinks}
          </ul>
        </div>
        <div>
          {loading ? (
            <div>
              <img
                className="h-14 mx-auto"
                src="https://cdn.dribbble.com/users/1787505/screenshots/7300251/media/a351d9e0236c03a539181b95faced9e0.gif"
                alt=""
              />
            </div>
          ) : user ? (
            <div className="lg:flex items-center gap-2 hidden ">
              <div className="group inline-block relative">
                <img
                  className="w-14 h-14 rounded-full"
                  src={user.photoURL}
                  alt=""
                />
                <div className="hidden group-hover:flex justify-center items-center bg-primary text-white text-xs rounded p-1 absolute  left-1/2 -translate-x-1/2 w-28">
                  {user.displayName}
                </div>
              </div>
              <button
                onClick={handleLogOut}
                className="font-semibold text-white bg-primary hover:bg-secondary py-2 px-4 rounded-lg  duration-300"
              >
                Log Out
              </button>
            </div>
          ) : (
            <button className="font-semibold text-white hidden lg:block">
              <NavLink
                to="/login"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? " block  bg-secondary py-2 px-4  rounded-lg"
                    : " block  bg-primary hover:bg-secondary py-2 px-4 rounded-lg duration-300"
                }
              >
                Login
              </NavLink>
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
