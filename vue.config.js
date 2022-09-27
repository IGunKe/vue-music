const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  publicPath: './',
  outputDir: 'dist',
  assetsDir: 'public',
  css: {
    loaderOptions: {
        scss: {
            // 不同 sass-loader 版本对应关键字， v8-: data   v8: prependData   v10+: additionalData
            additionalData: `@import "@/styles/main.scss";`
        }
    }
  }
});
