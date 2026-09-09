/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)'],
      },
      colors: {
        bronze: {
          50: '#f6efe4',
          100: '#ead9bd',
          200: '#dcbd8c',
          300: '#c99b5f',
          400: '#b8823f',
          500: '#9c6a33',
          600: '#7d5228',
          700: '#5c3d20',
          800: '#3d2a17',
          900: '#241a10',
          950: '#140f0a',
        },
        brass: {
          200: '#f1dfa9',
          300: '#e6c877',
          400: '#d4a24f',
          500: '#c9975a',
          600: '#a8763f',
        },
        patina: '#5b7a6b',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        brass: '0 0 0 1px rgba(212,162,79,0.35), 0 8px 24px -8px rgba(0,0,0,0.7)',
      },
    },
  },
  plugins: [],
}
