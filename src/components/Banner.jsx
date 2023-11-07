import { FaLocationArrow, FaSearchLocation } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="  bg-banner bg-cover h-80 md:h-[850px] relative">
      <div className="px-10 py-8 h-full max-w-7xl mx-auto">
        <div className="flex flex-col md:mt-20 space-y-3 md:space-y-10 max-w-2xl">
          <h1 className="text-primary text-3xl md:text-5xl lg:text-6xl font-bold garamond ">
          Anything’s possible when you have the talent
          </h1>
          <p className="text-primary text-xl md:text-2xl hidden lg:flex">
          Find skilled candidates, in-demand jobs and the solutions you need to help you do your best work yet.
          </p>
          {/* search */}
          <div className=" flex rounded-full border-2 border-r-0 border-primary max-w-2xl bg-white">
            <input
              className="rounded-l-full pl-3 w-full focus:border-primary focus:ring-secondary focus:ring-opacity-40  focus:outline-none focus:ring"
              type="text"
              placeholder="Job title,company or industry"
            />
            <div className="border md:border-x-2 border-x-primary w-full relative">
              <FaLocationArrow className="absolute text-xl mx-1 top-3 md:top-4 text-primary" />
              <input
                className="pl-7 w-full h-full focus:border-primary focus:ring-secondary focus:ring-opacity-40  focus:outline-none focus:ring"
                type="text"
                placeholder="City, state or zip code"
              />
            </div>
            <div className="rounded-r-full w-96 mr-2">
              <select
                className=" h-full w-full focus:border-primary focus:ring-secondary focus:ring-opacity-40  focus:outline-none focus:ring text-gray-400"
                name=""
              >
                <option>Select type</option>
                <option>On Site Job</option>
                <option>Hybrid</option>
                <option>Part Time</option>
                <option>Remote</option>
                <option>All Jobs</option>
              </select>
            </div>
            <div className="border-2 rounded-full border-primary">
              <button className="rounded-full px-1 py-2  md:px-2  md:py-3 bg-primary text-white m-1">
                <FaSearchLocation className="md:text-xl mx-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 bg-purple-700/50 w-full p-5">
        <div className="flex items-center justify-between flex-wrap gap-2 max-w-7xl mx-auto md:my-10">
          <div>
            <h2 className="text-white text-xl md:text-4xl font-semibold">
              Experience the new way to work
            </h2>
            <p className="text-white text-lg md:text-2xl font-semibold">
              See jobs we've picked just for you
            </p>
          </div>
          <div>
            <button className="rounded-full px-4 text-white md:text-lg font-semibold border py-2 border-white hover:bg-white/50">
              Get started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
