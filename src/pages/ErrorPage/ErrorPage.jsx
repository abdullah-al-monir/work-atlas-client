import { Link } from "react-router-dom";
import useDocumentTitle from "../../hooks/useTitle";
import ParticleBackground from "../../Particles/Particle";


const ErrorPage = () => {
  const title = "Work Atlas | Error Page";
  useDocumentTitle(title);
  return (
   <div>
    <ParticleBackground/>
     <section className="px-4 min-h-screen flex items-center justify-center mx-auto max-w-7xl">
      <div className="grid items-center w-full grid-cols-1 gap-10 mx-auto md:w-4/5 lg:grid-cols-2 xl:gap-32">
        <div>
          <p className="mb-2  font-semibold tracking-wide text-red-500 uppercase">
            Error 404
          </p>
          <h1 className="mb-4 text-2xl font-extrabold leading-tight tracking-tight text-left text-white md:text-4xl">
            Oops! The page you're looking for isn't here.
          </h1>
          <p className="mb-5 text-base text-left text-white md:text-xl">
            You might have the wrong address, or the page may have moved.
          </p>
          <button className="bg-secondary hover:bg-primary px-4 py-2 text-white font-semibold rounded-lg">
          <Link
            to="/"
            className="w-full mb-2 btn btn-lg btn-light sm:w-auto sm:mb-0"
          >
            Back to homepage
          </Link>
          </button>
        </div>
        <div>
          <div className="w-full h-full  bg-gray-200 rounded-lg">
            <img src="https://cdn.dribbble.com/users/1138875/screenshots/4669703/media/37be7c1818f5542ec069c9bd7b2adb2b.gif" alt="" />
          </div>
        </div>
      </div>
    </section>
   </div>
  );
};

export default ErrorPage;
