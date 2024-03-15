module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        white: { A700_01: "#ffffff", A700_f2: "#fffffff2" },
        red: { A700: "#c00000", A100: "#ff7f7f" },
        gray: {
          300: "#dcdcdf",
          400: "#b0aeb6",
          600: "#7c7985",
          700: "#656565",
          800: "#3a3a3a",
          900: "#18181a",
          "700_01": "#606060",
          "50_01": "#fff5f5",
          "900_02": "#15171d",
          "50_02": "#fefcfa",
        },
        blue_gray: { 700: "#4f4d55", 900: "#313035" },
        deep_orange: { 50: "#ffe5e5" },
        indigo: { 100: "#cdd4ed" },
      },
      boxShadow: { xs: "0px 4px  14px 1px #00000028", sm: "0px 2px  10px 0px #0000000c" },
      fontFamily: { lato: "Lato", outfit: "Outfit", hilmar: "Hilmar" },
      backgroundImage: {
        gradient: "linear-gradient(271deg, #00000000,#181010)",
        gradient1: "linear-gradient(180deg, #ffffff,#fef8f6)",
        gradient2: "linear-gradient(180deg, #fdf0ec,#fffcfb)",
      },
      textShadow: { ts: "0px 4px  7px #00000007" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
