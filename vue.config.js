module.exports = {
  css: {
    sourceMap: true,
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/sass/globals.scss";
        `
      }
    }
  },

  assetsDir: 'assets'
}