import { useContext, useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import { AuthContext } from "../../providers/AuthProvider";
import { updateProfile } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useDocumentTitle from "../../hooks/useTitle";
const Register = () => {
  const { googleSignIn, createUser, setUser } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const title = "Work Atlas | Register";
  useDocumentTitle(title);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();
  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;
    if (password.length < 6) {
      return setError(
        "Password is not valid. It should be at least 6 characters long and consist of letters and numbers."
      );
    }
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        updateProfile(user, { displayName: name, photoURL: photo }).then(() => {
          setUser((currentUser) => {
            currentUser.displayName = name;
            currentUser.photoURL = photo;
            navigate("/");
            Swal.fire(
              "Success!",
              "User has been registered successfully",
              "success"
            );
          });
        });
      })
      .catch(() => setError("Sorry! Something went wrong"));
  };
  const handleGoogleLogin = () => {
    googleSignIn()
      .then(() => {
        navigate("/");
        Swal.fire(
          "Success!",
          "User logged in successfully by using Google.",
          "success"
        );
      })
      .catch(() => setError("Sorry! Something went wrong"));
  };
  return (
    <section className="max-w-screen-xl mx-auto">
      <div className="px-4 py-12 mx-auto max-w-5xl sm:px-6 md:px-12 lg:px-24 lg:py-24">
        <div className="justify-center mx-auto text-left align-bottom transition-all bg-white rounded-lg md:w-3/4 lg:w-full">
          <div className="grid flex-wrap items-center justify-center grid-cols-1 mx-auto shadow-xl lg:grid-cols-3 rounded-xl">
            <div className="w-full px-6 py-3 lg:col-span-2">
              <div>
                <div className="mt-3 text-left sm:mt-5">
                  <div className="inline-flex items-center w-full">
                    <h3 className="text-lg font-bold text-secondary lg:text-5xl ">
                      Register
                    </h3>
                  </div>
                </div>
              </div>

              <form onSubmit={handleSignUp} className="mt-6 space-y-3">
                <div className="flex flex-col lg:flex-row justify-between gap-5">
                  <div className="w-full">
                    <p className="mb-2">Name</p>
                    <input
                      type="text"
                      name="name"
                      className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out border border-secondary rounded-lg bg-gray-50 focus:outline-none focus:border-secondary focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="w-full">
                    <p className="mb-2">Email</p>
                    <input
                      type="email"
                      name="email"
                      className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out border border-secondary rounded-lg bg-gray-50 focus:outline-none focus:border-secondary focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
                <div className="flex flex-col lg:flex-row justify-between gap-5">
                  <div className="w-full">
                    <p className="mb-2">Profile Picture</p>
                    <input
                      type="link"
                      name="photo"
                      className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out border border-secondary rounded-lg bg-gray-50 focus:outline-none focus:border-secondary focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                      placeholder="Enter your profile picture link"
                    />
                  </div>
                  <div className="w-full">
                    <p className="mb-2">Password</p>
                    <div className="relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out border border-secondary rounded-lg bg-gray-50 focus:outline-none focus:border-secondary focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                        placeholder="Enter your password"
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
                </div>
                <div className="flex items-center md:gap-5 flex-wrap justify-between">
                  <div className="flex items-start mb-3">
                    <div className="flex items-center h-5">
                      <input
                        type="checkbox"
                        value=""
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300"
                        required
                      />
                    </div>
                    <label className="ml-2 text-sm font-medium">
                      Accept Our Terms & Conditions
                    </label>
                  </div>
                  <div className="mb-3">
                    <h2>
                      Already have an account?{" "}
                      <Link className="text-secondary font-semibold" to="/login">
                        Login
                      </Link>
                    </h2>
                  </div>
                </div>
                {error && (
                  <div className="mt-5 w-full block px-10 py-3.5 text-base font-medium text-center text-red-500 transition duration-500 ease-in-out transform border-2 border-red-500 shadow-red-500 shadow-sm rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                    <p>{error}</p>
                  </div>
                )}
                <div>
                  <input
                    type="submit"
                    value="Register"
                    className="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out bg-secondary rounded-xl hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
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
                  className="w-full items-center block px-10 py-3.5 text-base font-medium text-center text-secondary transition duration-500 ease-in-out transform border-2 border-secondary shadow-secondary shadow-sm rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 hover:bg-primary hover:text-white hover:border-primary"
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
                className="object-cover h-48 w-48 bg-cover rounded-l-lg mx-auto"
                src="workatlas.png"
                alt=""
              />
              <p
                className="text-4xl stylish font-extrabold text-center uppercase"
                style={{
                  background: `linear-gradient(90deg, #0466c8, #4cc9f0)`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Work Atlas
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
