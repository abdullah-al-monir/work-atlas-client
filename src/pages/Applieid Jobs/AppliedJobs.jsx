import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import axios from "axios";
import useDocumentTitle from "../../hooks/useTitle";
import generatePDF, { Resolution, Margin } from "react-to-pdf";
const options = {
  method: "download",
  fileName: "document.pdf",
  resolution: Resolution.HIGH,
  page: {
    margin: Margin.SMALL,
    format: "letter",
    orientation: "portrait",
  },
  canvas: {
    mimeType: "image/jpeg",
    qualityRatio: 1,
  },
  overrides: {
    pdf: {
      compress: true,
    },
    canvas: {
      useCORS: true,
    },
  },
};

const getTargetElement = () => document.getElementById("table");

const AppliedJobs = () => {
  const title = "Work Atlas | Applied Jobs";
  useDocumentTitle(title);
  const { user } = useContext(AuthContext);
  const [selectedCategory, setSelectedCategory] = useState("All Jobs");
  const userEmail = user?.email;
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [isDownloading, setIsDownloading] = useState(false);
  useEffect(() => {
    axios
      .get(
        `https://work-atlas-server.vercel.app/appliedJobs?email=${userEmail}&category=${selectedCategory}`,
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        setAppliedJobs(res.data);
        window.scrollTo(0, 0);
      });
  }, [userEmail, selectedCategory]);
  const handleCategoryChange = (event) => {
    console.log(event.target.value);
    setSelectedCategory(event.target.value);
  };
  const handleGeneratePDF = () => {
    setIsDownloading(true);
    generatePDF(getTargetElement, options).then(() => {
      setIsDownloading(false);
    });
  };
  return (
    <div>
      <section className="container mx-auto px-5">
        <div className="mt-5 text-right  w-full flex justify-end">
          <div className="">
            <label className=" text-sm mb-1 block  font-medium text-white">
              Filter by Job Type
            </label>
            <div className="min-w-[200px]">
              <select
                className="block w-full rounded-md px-2 py-1 border-primary shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-secondary"
                name="selectedCategory"
                value={selectedCategory}
                onChange={handleCategoryChange}
              >
                <option value="All Jobs">Select</option>
                <option value="Hybrid">Hybrid</option>
                <option value="On Site Job">On Site</option>
                <option value="Part Time">Part Time</option>
                <option value="Remote Job">Remote</option>
                <option value="All Jobs">All Jobs</option>
              </select>
            </div>
          </div>
        </div>
        {appliedJobs.length > 0 ? (
          <div>
            <div id="table" className="flex flex-col mt-6">
              <div className="">
                <h2 className="text-2xl font-medium text-white text-center py-5 bg-primary">
                  Jobs Applied by {user.displayName}
                </h2>
              </div>
              <div className="-mx-4 -my-2 sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                  <div className="overflow-hidden border border-black  md:rounded-lg">
                    <table className="min-w-full divide-y">
                      <thead className="bg-black">
                        <tr className="px-5 text-center">
                          <th className="px-4 py-3.5  text-left  text-secondary">
                            Job Info
                          </th>

                          <th className="py-3.5 text-left  text-secondary">
                            Company
                          </th>
                          <th className="md:py-3.5 text-left  text-secondary md:text-right lg:text-center">
                            <p className="hidden md:block">Salary</p>
                          </th>

                          <th className="lg:py-3.5  text-left  text-secondary ">
                            <p className="hidden lg:block">Job Type</p>
                          </th>
                          <th className="md:py-3.5  text-left  text-secondary ">
                            <p className="hidden lg:block">Date Applied</p>
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {appliedJobs.map((job) => (
                          <tr key={job._id} className=" px-5">
                            <td className="p-4 text-sm font-medium ">
                              <div className="inline-flex items-center gap-x-3">
                                <img
                                  className="h-28 md:h-20 w-36 md:w-32"
                                  src={job.jobBanner}
                                  alt=""
                                />
                                <div className="flex items-center gap-x-2">
                                  <div>
                                    <h2 className="font-semibold  ">
                                      {job.jobTitle}
                                    </h2>
                                    <p className="text-xs font-normal lg:hidden">
                                      Job type: {job.category}
                                    </p>
                                    <p className="text-xs font-normal ">
                                      Status: Pending
                                    </p>
                                    <p className="text-xs font-normal ">
                                      Posted by: {job.postedBy}
                                    </p>
                                    <p className="text-xs font-normal text-indigo-600 md:hidden">
                                      Salary: ${job.salaryRange}{" "}
                                      {job.category !== "Part Time" ? (
                                        <span>per year</span>
                                      ) : (
                                        <span>per hour</span>
                                      )}
                                    </p>
                                    <p className="text-xs font-normal ">
                                      Applicants: {job.NumberOfApplicants}
                                    </p>
                                    <p className="text-xs font-normal text-blue-500 lg:hidden">
                                      Applied: {job.applyDate.slice(0, 10)}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="py-4 text-sm font-normal text-gray-700">
                              <img
                                className="h-3 md:h-5"
                                src={job.companyLogo}
                                alt=""
                              />
                            </td>
                            <td className="md:py-4 text-sm text-indigo-600 font-semibold md:text-right lg:text-center">
                              <p className="hidden md:block">
                                ${job.salaryRange}{" "}
                                {job.category !== "Part Time" ? (
                                  <span>per year</span>
                                ) : (
                                  <span>per hour</span>
                                )}
                              </p>
                            </td>
                            <td className="lg:py-4 text-sm text-purple-500 font-semibold">
                              <p className="hidden lg:block">{job.category}</p>
                            </td>
                            <td className="lg:py-4 text-sm text-blue-500 font-semibold ">
                              <p className="hidden lg:block">
                                {job.applyDate.slice(0, 10)}
                              </p>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-right  mt-4 gap-x-3 mb-10">
              <button
                disabled={isDownloading}
                onClick={handleGeneratePDF}
                className="w-1/2 px-5 py-2 text-sm text-white transition-colors duration-200 bg-secondary rounded-lg sm:w-auto  hover:bg-primary "
              >
                {isDownloading ? "Downloading..." : "Download PDF"}
              </button>
            </div>
          </div>
        ) : (
          <div className="text-center text-lg text-primary my-20 px-5 font-semibold">
            You haven't applied for any job yet in this category
          </div>
        )}
      </section>
    </div>
  );
};

export default AppliedJobs;
