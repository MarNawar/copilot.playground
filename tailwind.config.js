/** @type {import('tailwindcss').Config} */
const twConfig = {
  darkMode: "class",
  content: [
    "./src/components/**/*.{html,jsx,tsx}",
    "./index.html",
    "./src/*.{html,tsx,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
            light: "#fff5d9",
            DEFAULT: "#E7B53D",
            dark: "#eeae14",
        },
        gray: {
            DEFAULT: "#F5F5F5",
            border: "#00000024",
            clean: "#919EAB4D",
        },
      },
      boxShadow: {
          app1: "0px 0.5px 4px 0px rgba(0, 0, 0, 0.18)",
          app2: "0px 3px 4px 0px rgba(0, 0, 0, 0.10)",
      },
      backgroundColor: {
          model: "rgba(0,0,0,0.4)",
      },
    },
  },
  plugins: [],
};

export default twConfig;
