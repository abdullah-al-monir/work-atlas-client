import { useContext, useEffect, useState } from "react";
import useDocumentTitle from "../../hooks/useTitle";
import axios from "axios";
import { Button, Input, Spinner } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const AllJobs = () => {
  const { loading, setLoading } = useContext(AuthContext);
  const [jobs, setJobs] = useState([]);
  const [search, setSearch] = useState("");
  const [noDataFound, setNoDataFound] = useState(false);
  const title = "Work Atlas | All Jobs";
  useDocumentTitle(title);

  useEffect(() => {
    setLoading(true);
    axios.get(`https://work-atlas-server.vercel.app/allJobs`,{withCredentials: true}).then((res) => {
      setJobs(res.data);
      setLoading(false);
      window.scrollTo(0, 0);
    });
  }, [setLoading]);
  const handleSearch = () => {
    setLoading(true);
    axios
      .get(`https://work-atlas-server.vercel.app/allJobs?search=${search}`,{withCredentials: true})
      .then((res) => {
        setJobs(res.data);
        setLoading(false);
        setNoDataFound(res.data.length === 0);
      });
  };

  const handleChange = (e) => {
    const newValue = e.target.value.trim();
    setSearch(newValue);

    if (newValue === "") {
      axios.get(`https://work-atlas-server.vercel.app/allJobs`, {withCredentials: true}).then((res) => {
        setJobs(res.data);
        setLoading(false);
        setNoDataFound(res.data.length === 0);
      });
    } else {
      axios
        .get(`https://work-atlas-server.vercel.app/allJobs?search=${newValue}`, {withCredentials: true})
        .then((res) => {
          setJobs(res.data);
          setLoading(false);
          setNoDataFound(res.data.length === 0);
        });
    }
  };
  return (
    <div>
      {loading ? (
        <div className="flex justify-center items-center h-[100vh]">
          <Spinner className="h-10 w-10 text-center text-primary" />
        </div>
      ) : (
        <div className="max-w-7xl mx-auto mb-10">
          <div className="mt-10 w-full px-5 flex justify-between  items-center gap-5 flex-wrap-reverse bg-white py-2 pt-10">
            <div>
              <h4 className="text-2xl md:text-3xl lg:text-4xl font-bold text-secondary uppercase">
                All Jobs
              </h4>
            </div>
            <div className="relative flex w-4/6 md:w-8/12  max-w-[20rem]">
              <Input
                type="text"
                label="Search by Job title"
                value={search}
                onChange={handleChange}
                className="pr-20 bg-white"
                containerProps={{
                  className: "min-w-0",
                }}
              />
              <Button
                size="sm"
                onClick={handleSearch}
                className={`!absolute right-1 top-1 rounded   ${
                  search === ""
                    ? "bg-secondary hover:bg-primary"
                    : "bg-primary hover:bg-secondary"
                }`}
              >
                Search
              </Button>
            </div>
          </div>
          <div>
            {noDataFound ? (
              <div className="text-center text-xl my-10 text-secondary">
                Sorry! No Job found.
              </div>
            ) : (
              <div>
                <div className="container  mx-auto">
                  <h2 className="p-2 text-2xl font-semibold bg-white">
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
                      <thead className="bg-black text-secondary border">
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
      )}
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
    <tr className="border-b border-opacity-20 bg-secondary/30 text-white border-x">
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
