/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#000000',
        foreground: '#ffffff',
        accent1: '#FFD700', // Premium Gold
        accent2: '#00F0FF', // Electric Blue
      },
      fontFamily: {
        sans: ['"General Sans"', 'Inter', 'sans-serif'],
        heading: ['Satoshi', 'Inter', 'sans-serif'],
      },
      animation: {
        'morph': 'morph 8s ease-in-out infinite',
      },
      keyframes: {
        morph: {
          '0%, 100%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' },
          '50%': { borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%' },
        }
      }
    },
  },
  plugins: [],
}
