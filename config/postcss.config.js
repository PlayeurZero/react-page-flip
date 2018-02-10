module.exports = {
  plugins: (loader) => [
    require("postcss-import")(),
    require("postcss-url")(),
    require("postcss-cssnext")()
  ]
}
