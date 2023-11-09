import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { FiCheckSquare } from "react-icons/fi";
import { AuthContext } from "../../providers/AuthProvider";
import { Spinner } from "@material-tailwind/react";
const Clients = () => {
  const [clients, setClients] = useState([]);
  const { loading, setLoading } = useContext(AuthContext);
  useEffect(() => {
    axios.get("https://work-atlas-server.vercel.app/clients").then((res) => {
      setClients(res.data);
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
    <div className="my-20 max-w-7xl px-5 text-white mx-auto">
      <div>
        {clients.map((client, idx) => (
          <div
            key={idx}
            className={`flex items-center flex-col gap-10 my-5 ${
              idx % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
            }`}
          >
            <img
              className="md:h-[500px] lg:h-96 rounded-2xl"
              src={client.img}
              alt=""
            />
            <div className="space-y-5 max-w-2xl">
              <h1 className="text-2xl md:text-4xl lg:text-5xl">
                {client.title}
              </h1>
              <div className="">
                {client.details.map((detail, idx) => (
                  <div className="flex gap-2" key={idx}>
                    <FiCheckSquare className="text-secondary text-3xl" />
                    <p>{detail}</p>
                  </div>
                ))}
              </div>
              <div className="flex flex-col md:flex-row gap-5">
                <button className="py-3 px-6 bg-secondary rounded-full hover:bg-primary duration-300">
                  {client.btn1}
                </button>
                <button className="py-3 px-6 border rounded-full border-secondary hover:bg-primary duration-300">
                  {client.btn2}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clients;
