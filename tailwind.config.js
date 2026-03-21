/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"A2Z"', "sans-serif"],
      },
      colors: {
        bg: "#191919",
        fg: "#f6f5f5",
        muted: "#7a7a7a",
        accent: "#24e30e",
        card: "#1a1916",
        border: "rgba(59,59,59,0.60)",
      },
    },
  },
  plugins: [],
};
