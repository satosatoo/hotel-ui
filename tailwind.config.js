export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      gridTemplateColumns: {
        '70/30': '70% 28%',
      },
      colors: {
        'dark-grey': '#181818',
        'custom-white': '#bdccff',
        'custom-purple': '#756aad',
        'custom-purple-hover': '#805bc9',
        'dusty-rose': '#a55959',
      },
      boxShadow: {
        'custom-pink': 'rgba(93, 48, 133, 0.16) 0px 3px 6px, rgba(93, 48, 133, 0.23) 0px 3px 6px;',
      }
    },
  },
  plugins: [],
}