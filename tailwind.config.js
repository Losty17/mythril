const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Staatliches", ...defaultTheme.fontFamily.sans],
        sans: ["Inter Var", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        ...defaultTheme.colors,
        transparent: "transparent",
        current: "currentColor",
        "mythril-900": "#00004b",
        "mythril-700": "#004272",
        "mythril-500": "#1a7987",
        "mythril-300": "#57b194",
        "mythril-100": "#a1eed4",
      },
      fontSize: {
        xt: "0.6rem",
        "2.5xl": "26px",
      },
      screens: {
        xs: "320px",
      },
    },
  },
  plugins: [],
};
