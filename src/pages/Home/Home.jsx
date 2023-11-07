import Banner from "../../components/Banner";
import Hiring from "../../components/Hiring/Hiring";
import JobSection from "../../components/Job Section/JobSection";
import ServiceJobs from "../../components/ServiceJobs/ServiceJobs";
import useDocumentTitle from "../../hooks/useTitle";

const Home = () => {
  const home = "Work Atlas | Home";
  useDocumentTitle(home);
  return (
    <div>
      <Banner />
      <JobSection />
      <Hiring />
      <ServiceJobs />
    </div>
  );
};

export default Home;
