/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: '#0f1e3c',
        teal: '#00b4d8',
        'light-gray': '#f4f6f9',
      },
      fontFamily: {
        body: ['Inter', 'sans-serif'],
        heading: ['Syne', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
