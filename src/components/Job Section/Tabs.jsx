import { Tabs, TabsHeader, Tab } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import useCategories from "../../hooks/useCategories";
import JobCard from "./JobCard";
export function TabsDefault() {
  const categories = useCategories();
  console.log(categories);
  const [category, setCategory] = useState("On Site Job");
  const activeCategory = category;
  console.log(category);
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:7000/jobsByCategory?category=${category}`)
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, [category]);
  console.log(jobs);
  return (
    <Tabs value="html">
      <TabsHeader>
        {categories.map((category, idx) => (
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
      {/* <motion.div
         animate={{ x: [0, 100, 0] }}
      > */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10 justify-center items-center">
            {jobs.map((job) => (
              <JobCard key={job._id} job={job} />
            ))}
          </div>
          {/* </motion.div> */}
      </div>
    </Tabs>
  );
}
