/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{html,ts}"];
export const theme = {
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
};
export const plugins = [];
