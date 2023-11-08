import { useContext, useEffect, useState } from "react";
import useDocumentTitle from "../../hooks/useTitle";
import DatePicker from "react-date-picker";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";
import useDateFormat from "../../hooks/useDateFormat";
import { AuthContext } from "../../providers/AuthProvider";
import { BsCalendar3 } from "react-icons/bs";
import { AiOutlineCloseSquare } from "react-icons/ai";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
const AddJob = () => {
  const { user } = useContext(AuthContext);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [value, onChange] = useState("");
  const userId = user.uid;
  const title = "Work Atlas | Add Job";
  useDocumentTitle(title);
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const handleCategoryChange = (event) => {
    console.log(event.target.value);
    setSelectedCategory(event.target.value);
  };
  const posted = new Date();
  const postedDate = useDateFormat(posted);
  console.log(postedDate);
  const deadline = new Date(value);
  const applicantsDeadline = useDateFormat(deadline);
  console.log(applicantsDeadline);
  const handleAddJob = (e) => {
    e.preventDefault();
    const form = e.target;
    const jobTitle = form.jobTitle.value;
    const postedBy = form.postedBy.value;
    const category = form.category.value;
    const applicationDeadline = form.applicationDeadline.value;
    const salaryRange = form.salaryRange.value;
    const NumberOfApplicants = parseInt(form.NumberOfApplicants.value);
    const jobDetails = form.jobDetails.value;
    const jobBanner = form.jobBanner.value;
    const companyLogo = form.companyLogo.value;
    const job = {
      jobTitle,
      postedBy,
      category,
      postingDate: postedDate,
      salaryRange,
      NumberOfApplicants,
      jobBanner,
      companyLogo,
      jobDetails,
      applicationDeadline,
      userId,
    };
    console.log(job);
    axios
      .post("https://work-atlas-server.vercel.app/allJobs", job)
      .then(() => {
        navigate("/allJobs");
        Swal.fire("Great!", "You have posted the job successfully", "success");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="my-10">
      <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md">
        <h2 className="text-2xl font-semibold text-primary">
          Fill the form to post a job
        </h2>

        <form onSubmit={handleAddJob}>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label className="text-gray-700">Job Title</label>
              <input
                type="text"
                name="jobTitle"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-black   focus:border-primary focus:ring-secondary focus:ring-opacity-40  focus:outline-none focus:ring"
                placeholder="Enter the job title"
                required
              />
            </div>
            <div>
              <label className="text-gray-700">Posted by</label>
              <input
                type="text"
                defaultValue={user.displayName}
                name="postedBy"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-black   focus:border-primary focus:ring-secondary focus:ring-opacity-40  focus:outline-none focus:ring"
                disabled
              />
            </div>
            <div>
              <label className="text-gray-700">Job Type</label>
              <select
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-black   focus:border-primary focus:ring-secondary focus:ring-opacity-40  focus:outline-none focus:ring"
                name="category"
                value={selectedCategory}
                onChange={handleCategoryChange}
                required
              >
                <option value="">Select</option>
                <option value="On Site Job">On Site Job</option>
                <option value="Hybrid">Hybrid</option>
                <option value="Part Time">Part Time</option>
                <option value="Remote Job">Remote</option>
                <option value="All Jobs">All Jobs</option>
              </select>
            </div>

            <div>
              <label className="text-gray-700">Salary range (per year)</label>
              <input
                type="text"
                name="salaryRange"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-black   focus:border-primary focus:ring-secondary focus:ring-opacity-40  focus:outline-none focus:ring"
                placeholder="Enter the salary range"
                required
              />
            </div>

            <div>
              <label className="text-gray-700">Job Description</label>
              <input
                type="text"
                name="jobDetails"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-black  focus:border-primary focus:ring-secondary focus:ring-opacity-40  focus:outline-none focus:ring"
                placeholder="Write the job description"
              />
            </div>

            <div>
              <label className="text-gray-700">Posting Date</label>
              <DatePicker
                className="block w-full my-2 text-gray-700 bg-white   focus:border-primary focus:ring-secondary focus:ring-opacity-40  focus:outline-none focus:ring"
                name="postingDate"
                calendarIcon={
                  <BsCalendar3 className="text-primary text-xl my-1.5" />
                }
                yearPlaceholder="yyyy"
                monthPlaceholder="mm"
                dayPlaceholder="dd"
                minDate={new Date()}
                format="y-MM-dd"
                value={new Date()}
                clearIcon
                disabled
              />
            </div>
            <div>
              <label className="text-gray-700 mr-2">Application Deadline</label>
              <DatePicker
                className="block w-full my-2 text-gray-700 bg-white   focus:border-primary focus:ring-secondary focus:ring-opacity-40  focus:outline-none focus:ring"
                name="applicationDeadline"
                calendarIcon={
                  <BsCalendar3 className="text-primary text-xl my-1" />
                }
                clearIcon={
                  <AiOutlineCloseSquare className="text-primary text-2xl my-1" />
                }
                yearPlaceholder="yyyy"
                monthPlaceholder="mm"
                dayPlaceholder="dd"
                minDate={new Date()}
                format="y-MM-dd"
                onChange={onChange}
                value={value}
                required
              />
            </div>
            <div>
              <label className="text-gray-700">Applicant Number</label>
              <input
                type="text"
                name="NumberOfApplicants"
                defaultValue={0}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-black  focus:border-primary focus:ring-secondary focus:ring-opacity-40  focus:outline-none focus:ring"
                disabled
              />
            </div>
            <div className="">
              <label className="text-gray-700">Job Banner (Optional)</label>
              <input
                type="text"
                name="jobBanner"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-black  focus:border-primary focus:ring-secondary focus:ring-opacity-40  focus:outline-none focus:ring"
                placeholder="Job banner image link"
              />
            </div>
            <div>
              <label className="text-gray-700">Company Logo (Optional)</label>
              <input
                type="text"
                name="companyLogo"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-black   focus:border-primary focus:ring-secondary focus:ring-opacity-40  focus:outline-none focus:ring"
                placeholder="Company logo image link"
              />
            </div>
          </div>

          <div className="flex justify-end mt-6">
            <input
              type="submit"
              value="Add"
              className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 font-semibold transform bg-primary rounded-md hover:bg-secondary focus:outline-none focus:bg-secondary"
            />
          </div>
        </form>
      </section>
    </div>
  );
};

export default AddJob;
