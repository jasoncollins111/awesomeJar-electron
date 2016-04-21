// var webpack = require('webpack');
// module.exports = {
//   entry: {
//   app: ['webpack/hot/dev-server', './src/App.js'],
// },
// output: {
//   path: './public/built',
//   filename: 'bundle.js',
//   publicPath: 'http://localhost:8080/built/'
// },
// devServer: {
//   contentBase: './public',
//   publicPath: 'http://localhost:8080/built/'
// },
// module: {
//  loaders: [
//    { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
//    { test: /\.css$/, loader: 'style-loader!css-loader' },
//    { test: /\.less$/, loader: 'style-loader!css-loader!less-loader'}
//  ]
// },
//  plugins: [
//    new webpack.HotModuleReplacementPlugin()
//  ]
// }
var path = require('path')
var webpack = require('webpack')

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './src/App.js'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      { test: /\.js$/,loaders: ['babel'],exclude: /node_modules/, include: __dirname},
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.less$/, loader: 'style-loader!css-loader!less-loader'}
    ]
  }
}
