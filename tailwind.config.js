module.exports = {
  mode: 'jit',
  content: [
    '.public/**/*.{html,js}',
    'index2.html'
  ],
  theme: {
    extend: {
      fontFamily: {
        nunito: "'Nunito Sans', sans-serif",
      },
      spacing: {
        '97': '28rem',
        '100': '40rem',
      },
      colors: {
        jgreen: {
          light: '#044a2f',
          DEFAULT: '#05a081',
          dark: '#0ac77e'
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
