const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: './app.js',
  output: {
    path: path.join(__dirname,'dist'),
    publicPath: './dist/',
    filename: 'bundle.js'
  },
  devServer:{
    port: 3000,
    publicPath: '/dist/'
  },
  module:{
    loaders:[
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      }
    ]
  },
  plugins:[
    // new UglifyJSPlugin()
  ]
}