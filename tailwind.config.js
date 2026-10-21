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
        brand: '#2f7fc1',
        ember: '#e25b24',
        teal: '#2f7fc1',
        paper: '#f4f6f9',
        ink: '#1c2434',
        muted: '#5b6575',
        'light-gray': '#f4f6f9',
      },
      fontFamily: {
        body: ['Inter', 'sans-serif'],
        heading: ['Syne', 'sans-serif'],
      },
      maxWidth: {
        content: '72rem',
      },
      boxShadow: {
        card: '0 1px 2px rgba(15, 30, 60, 0.06), 0 12px 32px rgba(15, 30, 60, 0.06)',
      },
    },
  },
  plugins: [],
}
