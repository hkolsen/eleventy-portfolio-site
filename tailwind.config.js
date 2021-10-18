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
      'sans': ['Josefin Sans', 'sans-serif'],
    },
    extend: {
      colors: {
        'lightgray': '#e0e0e0',
        'gray': '#C0C0C0',
        'darkgray': '#333',
        'navy': '#211e36',
        'blue': '#082840',
        'white': '#fff',
        'babyblue': '#69abe5',
        'purple': '#b0539a',
        'darkpurple': '#7c4183',
        'yellow': '#ece2a5',
        change: 'transparent',
      },
    },
  },
  darkMode: 'class',
  variants: {},
  plugins: [],
}