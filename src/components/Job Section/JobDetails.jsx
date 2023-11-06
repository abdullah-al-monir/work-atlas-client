import { useLoaderData, useNavigate } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { BsInfoCircle } from "react-icons/bs";
import axios from "axios";
const JobDetails = () => {
  const { user } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const job = useLoaderData();
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
    NumberOfApplicants,
    _id,
    userId,
  } = job;
  const deadline = new Date(applicationDeadline);
  const presentDate = new Date();
  const openModal = () => {
    if (userId === user.uid) {
      return Swal.fire(
        "Oops!",
        "Sorry! You can't apply for your own job post.",
        "error"
      );
    }
    if (deadline < presentDate) {
      return Swal.fire(
        "Oops!",
        "Sorry! You can't apply for this job. The deadline is over.",
        "error"
      );
    }
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleApplyJob = (e) => {
    e.preventDefault();
    const resume = e.target.resume.value;
    const appliedJob = {
      email: user.email,
      jobTitle,
      salaryRange,
      applyDate: presentDate,
      category,
      companyLogo,
      resume,
      NumberOfApplicants: NumberOfApplicants + 1,
    };
    axios
      .post("http://localhost:7000/appliedJobs", appliedJob)
      .then(() => {
        navigate("/appliedJobs");
        Swal.fire("Great!", "Applied the job successfully", "success");
      })
      .catch((err) => console.log(err));
    // to increase the applican
    axios.patch(`http://localhost:7000/applied/${_id}`, job);
  };
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
              <span className="text-sm font-medium text-primary uppercase">
                {category}
              </span>
              {category !== ("On SIte Job" || "Remote Job") && <span>Job</span>}
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
              Salary Range: ${salaryRange}{" "}
              {category !== "Part Time" && <span>per year</span>}
            </p>
            <p className="mt-2 text-sm  dark:text-gray-400">
              Number of Applicants: {NumberOfApplicants}
            </p>
          </div>

          <div className="mt-4">
            <div className="flex md:items-center flex-col md:flex-row gap-2">
              <div className="flex items-center">
                <FaRegUserCircle />
                <a
                  href="#"
                  className="mx-2 font-semibold text-gray-700"
                  tabIndex="0"
                  role="link"
                >
                  {postedBy}
                </a>
              </div>
              <p className="mx-1 text-xs text-black ">
                Posted in:{" "}
                <span className="text-green-500 font-semibold text-sm">
                  {postingDate}
                </span>
              </p>
              <p className="mx-1 text-xs text-black ">
                Application Deadline:{" "}
                <span className="text-red-500 font-semibold text-sm">
                  {applicationDeadline}
                </span>
              </p>
            </div>
          </div>
          <button
            onClick={openModal}
            className="bg-primary hover:bg-secondary text-white font-semibold px-4 py-2 rounded-lg mt-5 duration-300"
          >
            Apply
          </button>
        </div>
      </div>
      {/* Modal */}
      <div className="relative flex justify-center">
        {isOpen && (
          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
              <span
                className="hidden sm:inline-block sm:h-screen sm:align-middle"
                aria-hidden="true"
              >
                &#8203;
              </span>

              <div className="relative inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:w-full sm:max-w-sm sm:p-6 sm:align-middle">
                <h3 className="text-lg font-medium leading-6 text-gray-800 capitalize">
                  Application Form
                </h3>
                <form onSubmit={handleApplyJob} className="mt-4">
                  <div className="mb-5">
                    <label className="text-sm">Applicant's Name</label>

                    <label className="block mt-2">
                      <input
                        type="text"
                        name="name"
                        defaultValue={user.displayName}
                        className="block w-full px-4 py-3 text-sm bg-white border text-gray-700 border-gray-200 rounded-md focus:border-primary focus:outline-none focus:ring focus:ring-primary focus:ring-opacity-40 "
                        readOnly
                      />
                    </label>
                  </div>
                  <div className="mb-5">
                    <label className="text-sm">Email address</label>

                    <label className="block mt-2">
                      <input
                        type="email"
                        name="email"
                        placeholder="user@email.xyz"
                        defaultValue={user.email}
                        className="block w-full px-4 py-3 text-sm text-gray-700 bg-white border border-gray-200 rounded-md focus:border-primary focus:outline-none focus:ring focus:ring-primary focus:ring-opacity-40 "
                        readOnly
                      />
                    </label>
                  </div>
                  <div className="mb-5">
                    <label className="text-sm">Resume</label>

                    <label className="block mt-2">
                      <input
                        type="text"
                        name="resume"
                        placeholder="Applicant's resume link"
                        className="block w-full px-4 py-3 text-sm text-gray-700 bg-white border border-gray-200 rounded-md focus:border-primary focus:outline-none focus:ring focus:ring-primary focus:ring-opacity-40 "
                        required
                      />
                    </label>
                  </div>
                  <button
                    type="button"
                    className="mt-2 flex items-center rounded py-1.5 px-2 text-sm text-primary transition-colors duration-300 focus:outline-none "
                    disabled
                  >
                    <BsInfoCircle />
                    <span className="mx-2">
                      Don't give any false information.
                    </span>
                  </button>
                  <div className="mt-4 sm:flex sm:items-center sm:-mx-2">
                    <button
                      onClick={closeModal}
                      className="w-full px-4 py-2 text-sm font-medium tracking-wide text-gray-700 capitalize transition-colors duration-300 transform border border-gray-200 rounded-md sm:w-1/2 sm:mx-2 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800 hover:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40"
                    >
                      Cancel
                    </button>
                    <input
                      type="submit"
                      value="Submit"
                      className="w-full px-4 py-2 mt-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-primary rounded-md sm:mt-0 sm:w-1/2 sm:mx-2 hover:bg-secondary focus:outline-none focus:ring focus:ring-primary focus:ring-opacity-40"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default JobDetails;
