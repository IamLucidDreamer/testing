module.exports = {
  purge: {
    content: ['.public/**/*.html']
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
        spacing: {
            128: '32rem',
        },
    },
},
  variants: {
    extend: {},
  },
  plugins: [],
}
