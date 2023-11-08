import axios from "axios";
import { useEffect, useState } from "react";

const ServiceJobs = () => {
  const [serviceJobs, setServiceJobs] = useState([]);
  useEffect(() => {
    axios
      .get("https://work-atlas-server.vercel.app/jobServices")
      .then((res) => setServiceJobs(res.data));
  }, []);
  return (
    <div className="max-w-7xl mx-auto p-5 my-20">
      <div className="text-center my-10 mx-5">
        <button
          className="px-4 py-2 text-2xl md:text-4xl text-white bg-primary rounded-lg font-bold"
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
              <button className="text-xl font-semibold text-white px-4 py-2 bg-primary hover:bg-secondary duration-300 transform rounded-lg">
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
