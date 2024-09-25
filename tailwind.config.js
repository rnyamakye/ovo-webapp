/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "200px",
      sm: "360px",
      md: "768px",
      lg: "1080px",
    },
    colors: {
      "page-color": "#fff",
      "heading-text-color": "#111",
      "paragraph-text-color": "#464646",
      "button-color": "#0fac73",
      "elements-stroke": "#0fac73",
      "elements-bg": "white",
      "acent-color": "#0fac73",
      "hoved-color": "#d8d8d8",
      "acent-color-dim": "#0fac731a",
      "grey-section-color": "#f1f1f1",
    },
    extend: {},
  },
  plugins: [],
};
