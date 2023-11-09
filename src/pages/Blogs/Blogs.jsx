import { useEffect } from "react";

const Blogs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div className="mx-auto max-w-lg my-20">
        <div className="space-y-6">
          <details className="group rounded-xl bg-white shadow-[0_10px_100px_10px_rgba(0,0,0,0.05)]">
            <summary className="flex cursor-pointer list-none items-center justify-between p-6 text-lg font-medium text-secondary-900">
              What is an access token and refresh token? How do they work and
              where should we store them on the client-side?
              <div className="text-secondary-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="block h-5 w-5 transition-all duration-300 group-open:-rotate-90"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </div>
            </summary>
            <div className="px-6 pb-6 text-secondary-500">
              <span className="text-primary font-semibold">Access token :</span>
              Access tokens are used in token-based authentication to allow an
              application to access an API. The application receives an access
              token after a user successfully authenticates and authorizes
              access, then passes the access token as a credential when it calls
              the target API. The passed token informs the API that the bearer
              of the token has been authorized to access the API and perform
              specific actions specified by the Scope that was granted during
              authorization.
              <br />
              <span className="text-primary font-semibold">
                Refresh token :
              </span>
              A refresh token is used to generate a new token. When the access
              token will be expired, then user need to authenticate again to get
              an access token.
              <br />
              Refresh tokens are usually stored securely on the server side,
              while access tokens are stored on the client side. In the browser
              or client side we can store it as cookie or in the local storage
              .Usually we can store them in the http only cookies.
            </div>
          </details>
          <details className="group rounded-xl bg-white shadow-[0_10px_100px_10px_rgba(0,0,0,0.05)]">
            <summary className="flex cursor-pointer list-none items-center justify-between p-6 text-lg font-medium text-secondary-900">
              What is express js? What is Nest JS?
              <div className="text-secondary-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="block h-5 w-5 transition-all duration-300 group-open:-rotate-90"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </div>
            </summary>
            <div className="px-6 pb-6 text-secondary-500">
              Both ExpressJs and NestJs are the Javascript framework which are
              used to build web application specially server side and API.
              <br />
              <span className="text-primary font-semibold">ExpressJs :</span>
              ExpressJs is a quick and adaptable web framework for Node.js. It's
              designed to be straightforward, open to different approaches, and
              keeps things basic while giving you what you need to build web
              applications and APIs. <br />
              <span className="text-primary font-semibold">NestJs :</span>
              NestJs is a more opinionated and structured framework that
              provides patterns and best practices for building scalable and
              maintainable applications.
            </div>
          </details>
          <details className="group rounded-xl bg-white shadow-[0_10px_100px_10px_rgba(0,0,0,0.05)]">
            <summary className="flex cursor-pointer list-none items-center justify-between p-6 text-lg font-medium text-secondary-900">
              Code Explanation.
              <div className="text-secondary-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="block h-5 w-5 transition-all duration-300 group-open:-rotate-90"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </div>
            </summary>
            <div className="px-6 pb-6 text-secondary-500">
              In this website I used React as framework and Tailwind for CSS. I
              used MongoDB for the api database.I used firebase for
              authentication and also deployed my website in the firebase. I
              used some react libraries like react-router, react-helmet,
              react-to-pdf, emailjs, react-tsparticles, material-tailwind,
              sweetAlert2, react-icons, react-date-picker, framer-motion etc.I used jwt,cookie parser in the backend. I also used axios
              to get the data from api.
            </div>
          </details>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
