import axios from "axios";
import { useEffect, useState } from "react";

const Hiring = () => {
  const [hiring, setHiring] = useState([]);
  useEffect(() => {
    axios
      .get("https://work-atlas-server.vercel.app/hiring")
      .then((res) => setHiring(res.data));
  }, []);
  return (
    <div className="max-w-7xl mx-auto px-5 my-10">
      <div className="text-center my-10 mx-5">
      <button
          className="px-4 py-2 text-2xl md:text-4xl text-white bg-primary rounded-lg font-bold"
          disabled
        >
         Hiring Trends & Insights
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {hiring.map((hiring) => (
          <div className=" p-5 rounded-lg border" key={hiring._id}>
            <img
              className="rounded-lg transform transition-transform hover:scale-105 duration-300 mb-3"
              src={hiring.img}
              alt=""
            />
            <h3 className="text-2xl font-bold text-secondary garamond my-2">
              {hiring.title}
            </h3>
            <p className="text-white">{hiring.shortDetails}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hiring;