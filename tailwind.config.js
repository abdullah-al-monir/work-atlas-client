const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4cc9f0",
        secondary: "#0466c8",
      },
      backgroundImage: {
        banner:
          "url('https://www.gorspa.org/wp-content/uploads/iStock-job-board.jpg')",
      },
    },
  },
  plugins: [],
});
