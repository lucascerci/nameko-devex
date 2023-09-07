module.exports = {
  content: ['./src/**/*.html', './src/**/*.svelte'],
  theme: {
    container: (theme) => ({
      // To center containers by default
      center: true,

      // To add horizontal padding by default
      padding: theme("spacing.4"),
    }),
    extend: {
      colors: {
        blackFade: '#35344'
      },
    },
  },
  plugins: [],
}
