/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        neonBlue: '#00ffff',
        neonPink: '#ff00ff',
        neonGreen: '#39ff14',
      },
      boxShadow: {
        neonBlue: '0 0 10px #00ffff, 0 0 20px #00ffff, 0 0 30px #00ffff',
        neonPink: '0 0 10px #ff00ff, 0 0 20px #ff00ff, 0 0 30px #ff00ff',
        neonGreen: '0 0 10px #39ff14, 0 0 20px #39ff14, 0 0 30px #39ff14',
      },
    },
  },
  plugins: [],
};
