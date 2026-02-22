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
        card: '#111111',
        border: '#333333',
        primary: '#FFD700',
        muted: '#222222',
        'muted-foreground': '#888888',
        'sidebar-border': '#333333',
      },
      maxWidth: {
        container: "1280px",
      },
      animation: {
        marquee: 'marquee var(--duration) linear infinite',
        morph: 'morph 8s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(calc(-100% - var(--gap)))' }
        },
        morph: {
          '0%, 100%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' },
          '50%': { borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%' },
        }
      },
      fontFamily: {
        sans: ['"General Sans"', 'Inter', 'sans-serif'],
        heading: ['Satoshi', 'Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
