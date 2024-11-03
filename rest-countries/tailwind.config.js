/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.scss"  // Add this line to include SCSS files
  ],
  theme: {
    extend: {
      // You can extend Tailwind's theme here
      colors: {
        // Example of adding custom colors
        'custom-primary': '#1a73e8',
      }
    },
  },
  plugins: [],
}