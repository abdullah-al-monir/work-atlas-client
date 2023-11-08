import { useEffect } from "react";
import Banner from "../../components/Banner";
import Hiring from "../../components/Hiring/Hiring";
import JobSection from "../../components/Job Section/JobSection";
import ServiceJobs from "../../components/ServiceJobs/ServiceJobs";
import useDocumentTitle from "../../hooks/useTitle";
import Contact from "../../components/Contact";
const Home = () => {
  const home = "Work Atlas | Home";
  useDocumentTitle(home);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Banner />
      <JobSection />
      <Hiring />
      <ServiceJobs />
      <Contact />
    </div>
  );
};

export default Home;
