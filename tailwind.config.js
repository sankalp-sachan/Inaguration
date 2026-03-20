/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'neon-blue': '#00f3ff',
        'neon-purple': '#bc13fe',
        'accent-gold': '#ffd700',
        'dark-bg': '#050505',
      },
      fontFamily: {
        'sans-cyber': ['Orbitron', 'sans-serif'],
        'sans-indian': ['Outfit', 'sans-serif'],
      },
      animation: {
        'flicker': 'flicker 1.5s infinite alternate',
        'glow': 'glow 2.5s ease-in-out infinite alternate',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        flicker: {
          '0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%': {
            opacity: '1',
          },
          '20%, 21.999%, 63%, 63.999%, 65%, 69.999%': {
            opacity: '0.4',
          },
        },
        glow: {
          '0%': { 'box-shadow': '0 0 5px #bc13fe, 0 0 20px #bc13fe' },
          '100%': { 'box-shadow': '0 0 10px #00f3ff, 0 0 30px #00f3ff' },
        },
      },
      backgroundImage: {
        'cyber-grid': "radial-gradient(circle, rgba(0, 243, 255, 0.1) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
}
