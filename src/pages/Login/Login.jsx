import { useContext, useState } from "react";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useDocumentTitle from "../../hooks/useTitle";

const Login = () => {
  const { googleSignIn, signIn } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null);
  const title = "Work Atlas | Login";
  useDocumentTitle(title);
  const navigate = useNavigate();
  const location = useLocation();
  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password)
      .then(() => {
        navigate(location?.state ? location.state : "/");
        Swal.fire("Success!", "User logged in successfully", "success");
      })
      .catch(() => setError("Invalid email or password"));
  };
  const handleGoogleLogin = () => {
    googleSignIn()
      .then(() => {
        navigate(location?.state ? location.state : "/");
        Swal.fire(
          "Success!",
          "User logged in successfully using Google.",
          "success"
        );
      })
      .catch(() => setError("Sorry! Something went wrong"));
  };
  return (
    <section>
      <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24">
        <div className="justify-center mx-auto text-left align-bottom transition-all bg-white rounded-lg sm:align-middle sm:max-w-2xl sm:w-full">
          <div className="grid flex-wrap items-center justify-center grid-cols-1 mx-auto shadow-xl lg:grid-cols-2 rounded-xl">
            <div className="w-full px-6 py-3">
              <div>
                <div className="mt-3 text-left sm:mt-5">
                  <div className="inline-flex items-center w-full">
                    <h3 className="text-lg font-bold text-primary lg:text-5xl ">
                      Login
                    </h3>
                  </div>
                </div>
              </div>
              {error && (
                <div className="mt-5 w-full block px-10 py-3.5 text-base font-medium text-center text-red-500 transition duration-500 ease-in-out transform border-2 border-red-500 shadow-red-500 shadow-sm rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                  <p>{error}</p>
                </div>
              )}
              <form onSubmit={handleSignIn} className="mt-6 space-y-2">
                <div>
                  <label className="">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out border border-primary rounded-lg bg-gray-50 focus:outline-none focus:border-secondary focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div>
                  <p className="mb-2">Password</p>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out border border-primary rounded-lg bg-gray-50 focus:outline-none focus:border-secondary focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                      placeholder="Enter your password"
                      required
                    />
                    <button
                      className="text-lg absolute right-3 top-3 "
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <BsEyeFill></BsEyeFill>
                      ) : (
                        <BsEyeSlashFill></BsEyeSlashFill>
                      )}
                    </button>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row justify-between mb-4 gap-5">
                  <div className="flex items-start ">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        type="checkbox"
                        value=""
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300"
                      />
                    </div>
                    <label className="ml-2 text-sm font-medium ">
                      Remember me
                    </label>
                  </div>
                  <p className="ml-2 text-sm font-medium">Forget password?</p>
                </div>
                <div className="mb-5">
                  <h2>
                    Don't have an account?{" "}
                    <Link className="text-primary font-semibold" to="/register">
                      Register
                    </Link>
                  </h2>
                </div>
                <div className="flex flex-col mt-4 lg:space-y-2">
                  <input
                    type="submit"
                    value="Login"
                    className="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out bg-primary rounded-xl hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  />
                </div>
              </form>
              <div className="relative my-4">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 text-neutral-600 bg-white">
                    {" "}
                    Or continue with{" "}
                  </span>
                </div>
              </div>
              <div className="mb-5">
                <button
                  onClick={handleGoogleLogin}
                  className="w-full items-center block px-10 py-3.5 text-base font-medium text-center text-primary transition duration-500 ease-in-out transform border-2 border-primary shadow-secondary shadow-sm rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                >
                  <div className="flex items-center justify-center">
                    <FcGoogle className="text-2xl" />
                    <span className="ml-4"> Log in with Google</span>
                  </div>
                </button>
              </div>
            </div>
            <div className="order-first hidden w-full lg:block">
              <img
                className="object-cover h-full bg-cover rounded-l-lg"
                src="workatlas.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
