/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily:{'custom':['Verdana', 'Geneva', 'Tahoma', 'ui-sans-serif']},
    extend: {},
  },
  plugins: [],
}

