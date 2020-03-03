const path = require('path');

module.exports = {
  devServer:  {
    host: 'gawook.io'
  },
  configureWebpack: {
    resolve: {
      alias: {
        "requestfactory": path.resolve(__dirname, 'src/requests/RequestFactory.js')
      }
    }
  }
}