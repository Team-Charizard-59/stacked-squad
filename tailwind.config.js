/** @type {import('tailwindcss').Config} */
export default {
  content: [ './src/**/*.{js,jsx}'],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ["forest"]
  },

  plugins: [require('daisyui'), 'prettier-plugin-tailwindcss'],
};
