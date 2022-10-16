/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-blue": "#06283D",
        "semi-dark-blue": "#256D85",
        "light-blue": "#47B5FF",
        "sky-blue": "#DFF6FF",
      },
    },
  },
  plugins: [require("daisyui")],
};
