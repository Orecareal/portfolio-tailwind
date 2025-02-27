/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#3730a3",
        secondary: "#ea580c",
        dark: "#0f172a",
        grey: "#64748b",
        third:"#25D366",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
