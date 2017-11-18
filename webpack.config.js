const { join } = require('path')

module.exports = {
  entry: {
    app: join(__dirname, 'main.js')
  },
  output: {
    path: join(__dirname, 'src'),
    filename: 'build.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
}
