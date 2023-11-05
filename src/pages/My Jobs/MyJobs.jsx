import useDocumentTitle from "../../hooks/useTitle";

const MyJobs = () => {
  const title = "Work Atlas | My Jobs";
  useDocumentTitle(title);
  return (
    <div>
      <h2>This is MyJobs</h2>
    </div>
  );
};

export default MyJobs;