const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#9f00a5",
        secondary: "#d62fb3",
      },
      backgroundImage: {
        banner:
          "url('https://www.gorspa.org/wp-content/uploads/iStock-job-board.jpg')",
      },
    },
  },
  plugins: [],
});
