// NOTE:
// 1. Next.js default configuration, see: https://nextjs.org/docs/advanced-features/customizing-postcss-config
// 2. Tailwindcss with pre-processors, see: https://tailwindcss.com/docs/using-with-preprocessors
// 3. CSS variables, nesting, and autoprefixer are included in postcss-preset-env plugin.

module.exports = {
  plugins: {
    'postcss-import': {},
    'tailwindcss': {},
    'postcss-preset-env': {
      stage: 3
    },
  }
}