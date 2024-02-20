/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      darkMode: "class",
      colors: {
        Cgray: "#595959",
      },
      boxShadow: {
        skillOuter:
          "6px 6px 10px -1px rgba(0,0,0,0.15), -6px -6px 10px -1px rgba(255,255,255,0.7)",
        darkSkillOuter:
          "6px 6px 10px -1px rgb(78 78 78 / 10%), -6px -6px 10px -1px rgb(0 0 0 / 77%)",
        skillInner:
          "inset 4px 4px 6px -1px rgba(0,0,0,0.2), inset -4px -4px 6px -1px rgba(255,255,255,0.7), -0.5px -0.5px 0px rgba(255,255,255,1), 0.5px 0.5px 0px rgba(0,0,0,0.15),0px 12px 10px -10px rgba(0,0,0,0.05)",
        darkSkillInner:
          "inset 4px 4px 6px -1px rgb(123 121 121 / 7%), inset -4px -4px 6px -1px rgb(18 18 18 / 70%), -0.5px -0.5px 0px rgb(21 21 21), 0.5px 0.5px 0px rgb(0 0 0 / 47%),0px 12px 10px -10px rgb(0 0 0 / 15%)",
        blue10xl: "0 0px 250px 100px #224aa0",
        pink10xl: "0 10px 250px 100px #e43b97",
      },
    },
  },
  plugins: [],
};
