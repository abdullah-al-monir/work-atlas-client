// const JobCard = ({ job }) => {
//   const { postedBy, jobTitle, salaryRange, postingDate, applicationDeadline } =
//     job;
//   return <div>{jobTitle}</div>;
// };

// export default JobCard;
import { motion } from "framer-motion";

const JobCard = ({ job }) => {
  return (
    <>
      <motion.div animate={{ x: [null, 100, 0] }} >
      <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-4 mb-4">
        <h2 className="text-xl font-semibold text-primary">{job.jobTitle}</h2>
        <p className="text-gray-600">Posted by: {job.postedBy}</p>

        <div className="my-4">
          <p className="text-gray-700">
            <span className="font-semibold">Salary Range:</span>{" "}
            {job.salaryRange}
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">Posted Date:</span>{" "}
            {job.postingDate}
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">Application Deadline:</span>{" "}
            {job.applicationDeadline}
          </p>
        </div>
        <button className="bg-primary hover:bg-secondary text-white font-semibold px-4 py-2 rounded-lg">
          View details
        </button>
      </div>
      </motion.div>
    </>
  );
};

export default JobCard;
