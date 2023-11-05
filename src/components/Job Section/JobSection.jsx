import { TabsDefault } from "./Tabs";



const JobSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-5">
      <div className="text-center my-10 mx-5"><button className="px-4 py-2 text-xl md:text-2xl text-white bg-primary rounded-lg font-bold" disabled>Job by Category</button></div>
     <TabsDefault/>
    </div>
  );
};

export default JobSection;
