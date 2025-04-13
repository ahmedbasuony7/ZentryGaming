/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        zentry: ["zentry", "sans-serif"],
        general: ["general", "sans-serif"],
        "circular-web": ["circular-web", "sans-serif"],
        "robert-medium": ["robert-medium", "sans-serif"],
        "robert-regular": ["robert-regular", "sans-serif"],
      },
    },
    colors: {
      white:{
        10:"#FFFFFF",
        20: "#FFFFFF33"
      },
      black:{
        10:"#000000"
      },
      blue: {
        50: "#DFDFF0",
        75: "#dfdff2",
        100: "#F0F2FA",
        200: "#010101",
        300: "#4FB7DD",
      },
      violet: {
        300: "#5724ff",
      },
      neutral: {
        800: "#262626"
      } ,
      yellow: {
        100: "#8e983f",
        300: "#edff66",
      },
      gray: {
        200: "#D3D3D3",
        300: "#DFDFF0",
        400: "#A9A9A9"
      },
    },
  },
  plugins: [],
};
