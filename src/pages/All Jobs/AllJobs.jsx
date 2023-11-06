import { useEffect, useState } from "react";
import useDocumentTitle from "../../hooks/useTitle";
import axios from "axios";
import { BsSearch } from "react-icons/bs";
import { Button, Input } from "@material-tailwind/react";

const AllJobs = () => {
  const [search, setSearch] = useState("");
  const [jobs, setJobs] = useState([]);
  const title = "Work Atlas | All Jobs";
  useDocumentTitle(title);
  const handleSearch = () => {
    axios
      .get(`http://localhost:7000/allJobs?search=${search}`)
      .then((res) => setJobs(res.data));
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  useEffect(() => {
    axios.get(`http://localhost:7000/allJobs`).then((res) => setJobs(res.data));
  }, []);
  return (
    <div className="max-w-7xl mx-auto">
      <div className="my-10 w-full px-5 flex justify-between gap-5">
        <div>
          <h4 className="uppercase text-2xl font-bold">All Jobs</h4>
        </div>
      <div className="relative flex w-4/6 md:w-8/12  max-w-[20rem]">
      <Input
        type="text"
        label="Serch by Job Title"
        value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyPress={handleKeyPress}
        className="pr-20 bg-white"
        containerProps={{
          className: "min-w-0",
        }}
      />
      <Button
        size="sm"
        onClick={handleSearch}
        className={`!absolute right-1 top-1 rounded ${search === "" ? "bg-primary" : "bg-secondary"}`}
      >
        Search
      </Button>
    </div>
      </div>
      <div>{
      jobs.length === 0 && <div className="text-center text-xl my-10">Sorry! No Job found.</div>
      }</div>
      <div>
        {jobs && jobs.map((job) => (
          <p key={job._id}>{job.jobTitle}</p>
        ))}
      </div>
    </div>
  );
};

export default AllJobs;
