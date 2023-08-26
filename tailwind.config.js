/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      spacing: {
        'rtl-p-4': '0 0 0 1rem',
        'ltr-p-4': '0 1rem 0 0',
        // Add more as needed
      },
    },
  },
  plugins: [],
}
