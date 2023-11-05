import { Link, useLoaderData } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
const JobDetails = () => {
  const { user } = useContext(AuthContext);
  const job = useLoaderData();
  console.log(job);
  const {
    jobTitle,
    salaryRange,
    postingDate,
    postedBy,
    applicationDeadline,
    jobDetails,
    category,
    companyLogo,
    jobBanner,
  } = job;
  const handleApplyJob = ()=>{
   

    }
  }
  return (
    <div className="my-20 mx-5">
      <div className="overflow-hidden max-w-2xl bg-white rounded-lg shadow-md dark:bg-gray-800 mx-auto">
        <img
          className="object-cover w-full md:h-96"
          src={jobBanner}
          alt="Article"
        />

        <div className="p-6">
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs font-medium text-primary uppercase">
                {category}
              </span>
              <p>by</p>
              <img className="h-6" src={companyLogo} alt="" />
            </div>
            <a
              href="#"
              className="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline"
              tabIndex="0"
              role="link"
            >
              {jobTitle}
            </a>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              {jobDetails}
            </p>
            <p className="mt-2 text-sm  dark:text-gray-400">
              Salary: {salaryRange}
            </p>
          </div>

          <div className="mt-4">
            <div className="flex items-center">
              <div className="flex items-center">
                <FaRegUserCircle />
                <a
                  href="#"
                  className="mx-2 font-semibold text-gray-700 dark:text-gray-200"
                  tabIndex="0"
                  role="link"
                >
                  {postedBy}
                </a>
              </div>
              <p className="mx-1 text-xs text-gray-600 dark:text-gray-300">
                Posted in:{" "}
                <span className="text-green-500 font-semibold text-sm">
                  {postingDate}
                </span>
              </p>
              <p className="mx-1 text-xs text-gray-600 dark:text-gray-300">
                Application Deadline:{" "}
                <span className="text-red-500 font-semibold text-sm">
                  {applicationDeadline}
                </span>
              </p>
            </div>
          </div>
          <button onClick={handleApplyJob} className="bg-primary hover:bg-secondary text-white font-semibold px-4 py-2 rounded-lg">
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
