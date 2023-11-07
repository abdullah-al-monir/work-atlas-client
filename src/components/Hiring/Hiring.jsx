import axios from "axios";
import { useEffect, useState } from "react";

const Hiring = () => {
  const [hiring, setHiring] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:7000/hiring")
      .then((res) => setHiring(res.data));
  }, []);
  return (
    <div className="max-w-7xl mx-auto px-5 my-10">
      <div className="text-5xl text-center mb-10 text-primary">
        <h1>Hiring trends and insights</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {hiring.map((hiring) => (
          <div className="" key={hiring._id}>
            <img
              className="rounded-lg transform transition-transform hover:scale-105 duration-300 mb-3"
              src={hiring.img}
              alt=""
            />
            <h3 className="text-2xl font-bold text-primary garamond my-2">
              {hiring.title}
            </h3>
            <p className="text-gray-800">{hiring.shortDetails}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hiring;
