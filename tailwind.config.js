/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        dark: {
          bg: "#121212",
          surface: "#1e1e1e",
          primary: "#405DE6",
          secondary: "#5851DB",
          accent: "#833AB4",
        },
      },
    },
  },
  plugins: [],
};
