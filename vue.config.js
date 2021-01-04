const path = require('path');
module.exports = {
  lintOnSave: false,
  configureWebpack: {
    resolve: {
      // 别名
      alias: {
        '@': path.resolve(__dirname, './src'),
        assets: path.resolve(__dirname, './src/assets'),
        components: path.resolve(__dirname, './src/components'),
        utils: path.resolve(__dirname, './src/utils')
      }
    }
  }
}
