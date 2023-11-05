import useDocumentTitle from "../../hooks/useTitle";

const AddJob = () => {
  const title = "Work Atlas | Add Job";
  useDocumentTitle(title);
  return (
    <div>
      <h2>Add a job</h2>
    </div>
  );
};

export default AddJob;
