/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        light: { primary: "#3b82f6", selected: "#2563eb", hover: "#2563eb" },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
