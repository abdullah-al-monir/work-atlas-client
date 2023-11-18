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
      <motion.div
        animate={{ 
          scale: [1, 1.1, 1],
        }}
      >
        <div className=" border border-gray-200 rounded-lg shadow-lg p-4 mb-4">
          <img
            className="mb-5 rounded-t-lg h-auto md:h-60 mx-auto w-full"
            src={
              jobBanner ||
              "https://www.creativefabrica.com/wp-content/uploads/2021/07/03/we-are-hiring-job-vacancy-template-Graphics-14216159-1.jpg"
            }
            alt=""
          />
          <h2 className="text-xl font-semibold text-primary">{jobTitle}</h2>
          <p className="text-white">posted by: {postedBy}</p>

          <div className="my-4">
            <p className="text-white flex gap-2">
              <span className="font-semibold">Company: </span>
              {companyLogo ? (
                <img src={companyLogo} className="h-5 bg-white" alt="" />
              ) : (
                <p className="text-primary">Self</p>
              )}
            </p>
            <p className="text-white">
              <span className="font-semibold">Salary Range:</span> $
              {salaryRange}{" "}
              {category !== "Part Time" ? (
                <span>per year</span>
              ) : (
                <span>per hour</span>
              )}
            </p>
            <p className="text-primary font-semibold">
              <span className="text-white ">Posted Date:</span> {postingDate}
            </p>
            <p
              className={`${
                deadline < presentDate ? "text-red-500 " : "text-[#50C878]"
              } font-semibold`}
            >
              <span className="text-white ">Application Deadline:</span>{" "}
              {applicationDeadline}
            </p>
          </div>
          <Link to={`/job/${_id}`}>
            <button className="bg-secondary hover:bg-primary text-white font-semibold px-4 py-2 rounded-lg duration-300">
              View Details
            </button>
          </Link>
        </div>
      </motion.div>
    </>
  );
};

export default JobCard;
