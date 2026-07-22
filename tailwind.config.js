/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#00F5FF',
        },
        accent: '#7B2FBE',
        neon: '#00F5FF',
        background: '#0A0A0A',
        surface: '#0F172A',
        cardGlass: 'rgba(255,255,255,0.06)',
        border: 'rgba(255,255,255,0.06)',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
      boxShadow: {
        'neon-lg': '0 10px 40px rgba(123,47,190,0.18), 0 2px 8px rgba(0,245,255,0.06)',
      },
    },
  },
  plugins: [],
};
