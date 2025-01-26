/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        'container': '1600px',
      },
      fontFamily: {
        'DMSans': ['DM Sans', 'DM Sans'],
     },
     colors:{
      primary: "#262626",
      MainColor: "#D8D8D8"
     }
    },
  },
  plugins: [],
}
