/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          gray: "#d9d9d9",
          blue: "#3461ff",
          white: "#ffffff",
        },
      },
    },
  },
  plugins: [],
};
