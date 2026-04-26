/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0e0e12',
        surface: '#13131a',
        card: '#1a1a24',
        accent: {
          DEFAULT: '#22d3a5',
          dim: '#17a882',
        },
      },
      fontFamily: {
        mono: ['var(--font-mono)', 'Menlo', 'monospace'],
      },
    },
  },
  plugins: [],
}
