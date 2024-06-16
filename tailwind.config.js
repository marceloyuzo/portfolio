import { PiPhoneX } from 'react-icons/pi';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        color_1: '#0D0D0D',
        color_2: '#595959',
        color_3: '#212226',
        color_4: '#F2F2F2',
        color_5: '#CFF250',
        color_6: '#E2F263',
        color_7: '#F2E96B',
      },
      textShadow: {
        'default': '2px 2px 4px rgba(0, 0, 0, 0.5)',
      },
      borderWidth: {
        '0.5': '0.5px',
        '1': '1px'
      }
    },
  },
  variants: {
    textShadow: ['responsive', 'hover', 'focus'],
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.text-shadow': {
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
        }
      }, ['responsive', 'hover']);
    }
  ],
}


