import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const JobCard = ({ job }) => {
  const {
    jobTitle,
    salaryRange,
    postingDate,
    postedBy,
    applicationDeadline,
    _id,
    jobBanner,
    companyLogo,
    category,
  } = job;
  const presentDate = new Date();
  const deadline = new Date(applicationDeadline);
  return (
    <>
      <motion.div animate={{ x: [null, 100, 0] }}>
        <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-4 mb-4">
          <img
            className="mb-5 rounded-t-lg h-auto md:h-60 mx-auto"
            src={jobBanner}
            alt=""
          />
          <h2 className="text-xl font-semibold text-primary">{jobTitle}</h2>
          <p className="text-gray-600">posted by: {postedBy}</p>

          <div className="my-4">
            <p className="text-gray-700 flex gap-2">
              <span className="font-semibold">Company: </span>{" "}
              <img src={companyLogo} className="h-5" alt="" />
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Salary Range:</span> $
              {salaryRange}{" "}
              {category !== "Part Time" ? (
                <span>per year</span>
              ) : (
                <span>per hour</span>
              )}
            </p>
            <p className="text-primary font-semibold">
              <span className="text-gray-700 ">Posted Date:</span> {postingDate}
            </p>
            <p
              className={`${
                deadline < presentDate ? "text-red-500 " : "text-[#50C878]"
              } font-semibold`}
            >
              <span className="text-gray-700 ">Application Deadline:</span>{" "}
              {applicationDeadline}
            </p>
          </div>
          <Link to={`/job/${_id}`}>
            <button className="bg-primary hover:bg-secondary text-white font-semibold px-4 py-2 rounded-lg duration-300">
              View Details
            </button>
          </Link>
        </div>
      </motion.div>
    </>
  );
};

export default JobCard;
