/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'contact-bg': "url('/illustrations/safe-gym-return.jpg')",
      },
      height:{
        'h-v5': '50vh',
        'h-v7': '70vh',
        'h-v8': '80vh',
        'h-v9': '90vh',
      }
    },
  },
  plugins: [],
}
