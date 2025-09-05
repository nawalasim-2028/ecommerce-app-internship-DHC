/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1E293B",   // dark blue/gray (navbar, footer)
        secondary: "#FACC15", // yellow (buttons, highlights)
        accent: "#2563EB",    // blue accents
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"], // matches Figma
      },
    },
  },
  plugins: [],
};
