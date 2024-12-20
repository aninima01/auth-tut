/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "radial-custom":
          "radial-gradient(circle at 85.4% 50.8%, rgb(14, 72, 222) 0%, rgb(3, 22, 65) 74.2%)",
      },
    },
  },
  plugins: [],
};
