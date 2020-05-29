// const webpack = require('webpack');
const path = require("path");

module.exports = {
  configureWebpack: {
    // module: {
    //   rules: [
    //     {
    //       test: [/\.jpe?g/, /\.png/, /\.svg/, /\.gif/, /\.ico/],
    //       use: "file-loader"
    //     }
    //   ]
    // },
    resolve: {
      extensions: [".ts", ".js", ".vue", ".scss", ".css", ".json", ".txt"],
      alias: {
        "@/": path.resolve(__dirname, "src/*")
      }
      // alias: {
      //   _container: path.resolve(__dirname, "src/container"),
      //   _components: path.resolve(__dirname, "src/components"),
      //   _redux: path.resolve(__dirname, "src/redux"),
      //   _img: path.resolve(__dirname, "img"),
      //   _scss: path.resolve(__dirname, "src/scss"),
      //   _lib: path.resolve(__dirname, "src/lib"),
      //   _queries: path.resolve(__dirname, "src/queries"),
      //   _dummy: path.resolve(__dirname, "dummy")
      // }
    }
  }
};
