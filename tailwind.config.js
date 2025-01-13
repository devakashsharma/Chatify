/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Update to match your folder structure
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  presets: [require("nativewind/tailwind/native")],
};
