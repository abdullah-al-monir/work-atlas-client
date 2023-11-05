import JobSection from "../../components/Job Section/JobSection";
import useDocumentTitle from "../../hooks/useTitle";

const Home = () => {
  const home = "Work Atlas | Home";
  useDocumentTitle(home);
  return (
    <div>
      <h2>This is home</h2>
      <JobSection />
    </div>
  );
};

export default Home;
