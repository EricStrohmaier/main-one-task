/** @type {import('tailwindcss').Config} */
const forms = require('@tailwindcss/forms');
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        "blueImg" : "url('https://unsplash.com/photos/hHysFXwZ47U')",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        sans: ['var(--font-inter)', "sans-serif"],
        mono: ['var(--font-roboto-mono)'],
      },
    },
  },
  plugins: [forms],
}
