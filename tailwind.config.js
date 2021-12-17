module.exports = {
  mode: 'jit',
  content: [
    '.public/**/*.{html,js}',
    'index2.html'
  ],
  theme: {
    extend: {
      screens: {
        'sm': '320px',
        'md': '425px',
        'lg': '768px',
        'xl': '1024px',
        '2xl': '1600px',
      },
      fontFamily: {
        nunito: "'Nunito Sans', sans-serif",
      },
      spacing: {
        '97': '28rem',
        '100': '40rem',
        '101': '9px',
        '102': '6px',
        '103': '8px',
      },
      colors: {
        jgreen: {
          light: '#044a2f',
          DEFAULT: '#05a081',
          dark: '#0ac77e'
        },
        navb: {
          light: '#232a34',
          DEFAULT: '#232a34',
          dark: '#232a34',
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
