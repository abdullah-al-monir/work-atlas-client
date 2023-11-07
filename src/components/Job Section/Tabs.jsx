import { Tabs, TabsHeader, Tab, Spinner } from "@material-tailwind/react";
import { useContext, useEffect, useState } from "react";
import useCategories from "../../hooks/useCategories";
import JobCard from "./JobCard";
import { AuthContext } from "../../providers/AuthProvider";
export function TabsDefault() {
  const { setLoading, loading } = useContext(AuthContext);
  const categories = useCategories();
  const [category, setCategory] = useState("Part Time");
  const activeCategory = category;
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:7000/jobsByCategory?category=${category}`)
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
        setLoading(false);
      });
  }, [category, setLoading]);
  if (loading) {
    return (
      <div className="flex justify-center items-center h-[100vh]">
        <Spinner className="h-10 w-10 text-center text-primary" />
      </div>
    );
  }
  return (
    <Tabs value="html">
      <TabsHeader>
        {categories && categories.map((category, idx) => (
          <Tab
            key={idx}
            value={category.category}
            onClick={() => setCategory(category.category)}
            className={
              category.category === activeCategory
                ? "bg-white text-secondary md:text-lg font-semibold"
                : "text-primary md:text-lg font-semibold hover:text-secondary"
            }
          >
            {category.category}
          </Tab>
        ))}
      </TabsHeader>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10 justify-center items-center">
          {jobs.map((job) => (
            <JobCard key={job._id} job={job} />
          ))}
        </div>
      </div>
    </Tabs>
  );
}
