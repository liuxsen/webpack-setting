const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: {
    app: './ app.js'
  },
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
      },
      {
        test: /\.js$/,
        loaders: ['babel-loader'],
        exclude: /node_modules/
      }
    ]
  },
  plugins:[
    // new UglifyJSPlugin()
    new webpack.optimize.CommonsChunkPlugin({
      name: 'commons',
      filename: 'commons.js',
      minChunks: 3,
      chunks: ['app']
    })
  ]
}