/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FFFDF5',
          100: '#FFF9E7',
          200: '#FDF3D0',
          300: '#F8E8B0',
        },
        brown: {
          400: '#8A6A55',
          500: '#6B4A38',
          600: '#5A3A2A',
          700: '#462417',
          800: '#331A11',
        },
        pink: {
          300: '#F8A0B5',
          400: '#F47E9C',
          500: '#F06786',
          600: '#D94E6E',
          700: '#B83A56',
        },
        lilac: {
          300: '#D6C2EE',
          400: '#C9B0E6',
          500: '#BF9BE0',
          600: '#A87CCF',
        },
        teal: {
          300: '#5DC9C0',
          400: '#2CB4AB',
          500: '#0094AC',
          600: '#007A91',
        },
        mint: {
          200: '#D4F0E4',
          300: '#B7E2CF',
          400: '#9BD4BC',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float-slow': 'float 7s ease-in-out infinite',
        'float-slower': 'float 11s ease-in-out infinite',
        'spin-slow': 'spin 22s linear infinite',
        'spin-slower': 'spin 40s linear infinite',
        'fade-up': 'fadeUp 0.7s ease-out both',
        'shimmer': 'shimmer 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-18px) rotate(3deg)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
