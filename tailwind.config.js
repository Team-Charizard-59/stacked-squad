/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui"), ('prettier-plugin-tailwindcss')]
}

