module.exports = {
  mode: 'jit',
  purge: {
    content: ['_site/**/*.html'],
    options: {
      safelist: [],
    },
  },
  theme: {
    fontFamily: {
      'serif': ['Rye', 'serif'],
      'sans': ['Lato', 'sans-serif'],
    },
  },
  darkMode: 'class',
  variants: {},
  plugins: [],
}