import { TabsDefault } from "./Tabs";

const JobSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-5 mb-20 mt-60 md:mt-20">
      <div className="text-center my-10 mx-5">
        <button
          className="p-5 text-2xl md:text-4xl text-white bg-secondary rounded-lg font-bold"
          disabled
        >
          Jobs by Category
        </button>
      </div>
      <TabsDefault />
    </div>
  );
};

export default JobSection;
