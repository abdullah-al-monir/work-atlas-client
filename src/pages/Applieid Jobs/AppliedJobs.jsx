import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import axios from "axios";
import useDocumentTitle from "../../hooks/useTitle";

const AppliedJobs = () => {
  const title = "Work Atlas | Applied Jobs";
  useDocumentTitle(title);
  const { user, setLoading } = useContext(AuthContext);
  const [selectedCategory, setSelectedCategory] = useState("");
  const userEmail = user?.email;

  const [appliedJobs, setAppliedJobs] = useState([]);
  useEffect(() => {
    axios
      .get(
        `http://localhost:7000/appliedJobs?email=${userEmail}&category=${selectedCategory}`,
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        setAppliedJobs(res.data);
        setLoading(false);
      });
  }, [userEmail, setLoading, selectedCategory]);
  const handleCategoryChange = (event) => {
    console.log(event.target.value);
    setSelectedCategory(event.target.value);
  };
  return (
    <div>
      <section className="container mx-auto px-5">
        <div className="">
          <h2 className="text-2xl font-medium text-gray-800 text-center mt-10">
            Jobs Applied by {user.displayName}
          </h2>
        </div>
        <div className="mt-5 text-right">
          <label className="">
            Filter by job Category
            <select
              className="ml-2 px-2 py-1 rounded-lg"
              name="selectedCategory"
              value={selectedCategory}
              onChange={handleCategoryChange}
            >
              <option value="">Select</option>
              <option value="Hybrid">Hybrid</option>
              <option value="Part Time">Part Time</option>
              <option value="Remote">Remote Job</option>
              <option value="All Jobs">All Jobs</option>
            </select>
          </label>
        </div>
        {appliedJobs.length > 0 ? (
          <div>
            <div className="flex flex-col mt-6">
              <div className="-mx-4 -my-2 sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                  <div className="overflow-hidden border border-gray-200  md:rounded-lg">
                    <table className="min-w-full divide-y divide-gray-200 ">
                      <thead className="bg-gray-50 dark:bg-gray-800">
                        <tr className="flex justify-between items-center px-5 text-center">
                          <th className=" py-3.5  text-left rtl:text-right text-primary">
                            Job Type
                          </th>

                          <th className="py-3.5 ml-16  md:ml-5 text-right rtl:text-right text-primary">
                            Company
                          </th>

                          <th className="py-3.5  text-left rtl:text-right text-primary">
                            Date Applied
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {appliedJobs.map((job) => (
                          <tr
                            key={job._id}
                            className="flex items-center justify-between px-5"
                          >
                            <td className="py-4 text-sm font-medium text-gray-700">
                              <div className="inline-flex items-center gap-x-3">
                                <div className="flex items-center gap-x-2">
                                  <div>
                                    <h2 className="font-normal text-gray-800 ">
                                      {job.jobTitle}
                                    </h2>
                                    <p className="text-xs font-normal text-gray-500 ">
                                      {job.category}
                                    </p>
                                    <p className="text-xs font-normal text-gray-500 ">
                                      Salary: {job.salaryRange}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="py-4 text-sm font-normal text-gray-700">
                              <img
                                className="h-5 mr-16 md:mr-32"
                                src={job.companyLogo}
                                alt=""
                              />
                            </td>
                            <td className="py-4 text-sm text-gray-500">
                              {job.applyDate.slice(0, 10)}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-right  mt-4 gap-x-3">
              <button className="w-1/2 px-5 py-2 text-sm text-gray-800 transition-colors duration-200 bg-white border rounded-lg sm:w-auto  hover:bg-gray-100 ">
                Download
              </button>
            </div>
          </div>
        ): <div className="text-center text-lg text-primary my-20 px-5 font-semibold">You haven't apply for any job yet in this category</div>}
      </section>
    </div>
  );
};

export default AppliedJobs;
