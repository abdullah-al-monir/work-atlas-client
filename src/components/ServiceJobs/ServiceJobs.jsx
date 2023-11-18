import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Spinner } from "@material-tailwind/react";

const ServiceJobs = () => {
  const [serviceJobs, setServiceJobs] = useState([]);
  const { loading, setLoading } = useContext(AuthContext);
  useEffect(() => {
    axios
      .get("https://work-atlas-server.vercel.app/jobServices")
      .then((res) => {
        setServiceJobs(res.data);
        setLoading(false);
      });
  }, [setLoading]);
  if (loading) {
    return (
      <div className="flex justify-center items-center h-[100vh]">
        <Spinner className="h-10 w-10 text-center text-secondary" />
      </div>
    );
  }
  return (
    <div className="max-w-7xl mx-auto p-5 my-20">
      <div className="text-center my-10 mx-5">
        <button
          className="p-5 text-2xl md:text-4xl text-white bg-secondary rounded-lg font-bold"
          disabled
        >
          Searching for job?
        </button>
      </div>
      <div>
        {serviceJobs.map((job, idx) => (
          <div
            key={idx}
            className={`flex items-center flex-col ${
              idx % 2 === 1
                ? "md:flex-row-reverse text-right"
                : "md:flex-row text-left"
            }`}
          >
            <img
              className="w-full md:w-1/2 md:mt-0 mt-10"
              src={job.img}
              alt=""
            />
            <div className="space-y-5 md:px-12 max-w-lg mt-5 md:mt-0 ">
              <h1 className="text-3xl md:text-5xl font-bold garamond text-secondary">
                {job.title}
              </h1>
              <p className="text-lg text-white">{job.shortDetails}</p>
              <button className="text-xl font-semibold text-white px-4 py-2 bg-secondary hover:bg-primary duration-300 transform rounded-lg">
                {job.button}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceJobs;
