/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"A2Z"', 'sans-serif'],
      },
      colors: {
        bg: '#faf9f7',
        fg: '#1a1916',
        muted: '#8a8880',
        accent: '#c8a96e',
        card: '#ffffff',
        border: 'rgba(26,25,22,0.10)',
      },
    },
  },
  plugins: [],
}
