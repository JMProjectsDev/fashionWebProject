/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      translate: {
        0: "0",
        full: "100%",
        "-full": "-100%",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      screens: {
        'lg-custom': '1078px',
      },
    },
  },
  plugins: [],
};
