import useDocumentTitle from "../../hooks/useTitle";

const AllJobs = () => {
  const title = "Work Atlas | All Jobs";
  useDocumentTitle(title);
  return (
    <div>
      <h2>This is Al Jobs</h2>
    </div>
  );
};

export default AllJobs;