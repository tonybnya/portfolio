/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: 'selector',
  // darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        righteous: ["Righteous", "sans-serif"],
        source: ["Source Sans 3", "sans-serif"],
      },
    },
  },
  plugins: [],
};
