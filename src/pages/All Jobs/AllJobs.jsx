import { useContext, useEffect, useState } from "react";
import useDocumentTitle from "../../hooks/useTitle";
import axios from "axios";
import { Button, Input, Spinner } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const AllJobs = () => {
  const { setLoading, loading } = useContext(AuthContext);
  const [jobs, setJobs] = useState([]);
  const [search, setSearch] = useState("");
  const [noDataFound, setNoDataFound] = useState(false);
  const title = "Work Atlas | All Jobs";
  useDocumentTitle(title);
  const handleSearch = () => {
    axios.get(`http://localhost:7000/allJobs?search=${search}`).then((res) => {
      setJobs(res.data);
      setLoading(false);
      setNoDataFound(res.data.length === 0);
    });
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  useEffect(() => {
    axios.get(`http://localhost:7000/allJobs`).then((res) => {
      setJobs(res.data);
      setLoading(false);
    });
  }, [setLoading]);
  if (loading) {
    return (
      <div className="flex justify-center items-center h-[100vh]">
        <Spinner className="h-10 w-10 text-center text-primary" />
      </div>
    );
  }
  return (
    <div className="max-w-7xl mx-auto">
      <div className="my-10 w-full px-5 flex justify-between  items-center gap-5 flex-wrap-reverse">
        <div>
          <h4 className="text-2xl font-bold">All Jobs</h4>
        </div>
        <div className="relative flex w-4/6 md:w-8/12  max-w-[20rem]">
          <Input
            type="text"
            label="Search by Job title"
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
            className={`!absolute right-1 top-1 rounded ${
              search === "" ? "bg-primary" : "bg-secondary"
            }`}
          >
            Search
          </Button>
        </div>
      </div>
      <div>
        {noDataFound ? (
          <div className="text-center text-xl my-10">Sorry! No Job found.</div>
        ) : (
          <div>
            <div className="container p-2 mx-auto">
              <h2 className="mb-4 text-2xl font-semibold">
                Jobs found: {jobs.length}
              </h2>
              <div className="overflow-x-auto">
                <table className="min-w-full text-xs">
                  <colgroup>
                    <col />
                    <col />
                    <col />
                    <col />
                    <col />
                    <col className="w-24" />
                  </colgroup>
                  <thead className="bg-black text-secondary">
                    <tr className="text-left">
                      <th className="p-3 md:text-lg">Role</th>
                      <th className="p-3 md:text-lg">Posted by</th>
                      <th className="p-3 md:text-lg">Issued</th>
                      <th className="p-3 md:text-lg">Deadline</th>
                      <th className="p-3 md:text-lg text-right">Salary</th>
                      <th className="p-3"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {jobs &&
                      jobs.map((job) => (
                        <TableRow
                          key={job._id}
                          role={job.jobTitle}
                          category={job.category}
                          postedBy={job.postedBy}
                          issuedDate={job.postingDate}
                          deadline={job.applicationDeadline}
                          salary={job.salaryRange}
                          id={job._id}
                          details="Details"
                        />
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
function TableRow({
  role,
  postedBy,
  issuedDate,
  deadline,
  salary,
  details,
  category,
  id,
}) {
  return (
    <tr className="border-b border-opacity-20 bg-secondary/30">
      <td className="p-3">
        <p className="md:text-base">{role}</p>
        <p>{category}</p>
      </td>
      <td className="p-3 text-sm">
        <p>{postedBy}</p>
      </td>
      <td className="p-3">
        <p>{issuedDate}</p>
      </td>
      <td className="p-3">
        <p>{deadline}</p>
      </td>
      <td className="p-3 text-right">
        <p>
          ${salary} {category !== "Part Time" ? "per year" : "per hour"}
        </p>
      </td>
      <td className="p-3 text-right">
        <span className="px-3 py-1 font-semibold rounded-md">
          <Link to={`/job/${id}`}>
            <button className="py-1 px-2 bg-primary rounded-md text-white hover:bg-secondary duration-300 transform">
              {details}
            </button>
          </Link>
        </span>
      </td>
    </tr>
  );
}
export default AllJobs;
