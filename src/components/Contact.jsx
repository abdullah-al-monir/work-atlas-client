const Contact = () => {
  return (
    <div className="my-20 px-5">
      {/* Particles */}
      {/* Contact */}
      <div className="grid max-w-7xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 bg-white">
        <div className="flex flex-col justify-between">
          <div className="space-y-2">
            <h2 className="text-4xl font-bold garamond lg:text-5xl text-secondary">
              Let's talk!
            </h2>
            <div className="">
              Let's connect and explore new career opportunities together.
            </div>
          </div>
          <img
            src="https://www.elaros.com/wp-content/uploads/2023/02/97583-contact-1.gif"
            alt=""
            className="w-80 h-80"
          />
        </div>
        <form className="space-y-6">
          <div>
            <label className="text-md ">Full name</label>
            <input
              type="text"
              placeholder=""
              className="w-full p-3 transition duration-500 ease-in-out border border-primary rounded-lg bg-gray-50 focus:outline-none focus:border-secondary focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
            />
          </div>
          <div>
            <label className="text-md">Email</label>
            <input
              type="email"
              className="w-full p-3 transition duration-500 ease-in-out border border-primary rounded-lg bg-gray-50 focus:outline-none focus:border-secondary focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
            />
          </div>
          <div>
            <label className="text-md">Message</label>
            <textarea
              rows="3"
              className="w-full p-3 transition duration-500 ease-in-out border border-primary rounded-lg bg-gray-50 focus:outline-none focus:border-secondary focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full p-3 text-sm font-bold  uppercase rounded-lg bg-secondary text-white hover:bg-primary duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
