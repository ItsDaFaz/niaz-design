/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'background-1': "url('/src/assets/bg-1.png')",
      },
      colors: {
        white: "#FFF",
        black: "#000",
      },
    },
  },
  plugins: [],
};

