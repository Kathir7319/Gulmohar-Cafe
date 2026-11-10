/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gulmohar: {
          50: '#FFF5F1',
          100: '#FFE8DF',
          200: '#FED2C3',
          300: '#FCAE95',
          400: '#F87E5C',
          500: '#E84A27', // signature vibrant vermilion
          600: '#D23717',
          700: '#AF280F',
          800: '#8C2312',
          900: '#732115',
          950: '#3E0C06',
        },
        saffron: {
          50: '#FFFBEB',
          100: '#FEF3C7',
          200: '#FDE68A',
          300: '#FCD34D',
          400: '#FBBF24',
          500: '#F59E0B',
          600: '#D97706',
          700: '#B45309',
        },
        chai: {
          50: '#FAF8F5',
          100: '#F4EFE6',
          200: '#E8DEC8',
          300: '#D7C4A5',
          800: '#4A3B2C',
          900: '#2A1F18',
          950: '#1A1410',
        },
        chutney: {
          50: '#F0FDF4',
          100: '#DCFCE7',
          600: '#16A34A',
          700: '#15803D',
          800: '#166534',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'warm': '0 10px 30px -5px rgba(232, 74, 39, 0.15)',
        'warm-lg': '0 20px 40px -15px rgba(232, 74, 39, 0.22)',
        'card': '0 4px 20px -2px rgba(42, 31, 24, 0.06), 0 2px 6px -1px rgba(42, 31, 24, 0.04)',
      }
    },
  },
  plugins: [],
}
