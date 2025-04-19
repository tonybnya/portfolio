/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "selector",
  theme: {
    extend: {
      fontFamily: {
        righteous: ["Righteous", "sans-serif"],
        source: ["Source Sans 3", "sans-serif"],
      },
      dropShadow: {
        custom: "50px 50px 100px white",
        red: "50px 50px 100px #862019",
        blue: "50px 50px 50px #062A5A",
        other: "10px 10px 50px #862019",
      },
    },
  },
  plugins: [],
};
