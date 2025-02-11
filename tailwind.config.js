/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {

    screens: {
      'xsm':'500px',
      'sm': '640px',
      'xmd': '600px',
      'md': '768px',
      'mdx':'905px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },

    extend: {},
  },
  plugins: [],
};
