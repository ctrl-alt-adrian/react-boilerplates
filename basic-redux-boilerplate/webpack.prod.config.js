const webpack = require('webpack');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './index.html',
  filename: 'index.html',
  inject: 'body'
})

module.exports = {
  devtool: 'source-map',
  entry: [
    'babel-polyfill',
    'react-hot-loader/patch',
    './src/index.js',
  ],
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'index_bundle.js',
  },
  module: {
    loaders: [
      { test: /\.(js|jsx|es6)$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.(sass|scss)$/, use: 'style-loader'},
      { test: /\.(sass|scss)$/, loader: 'css-loader',
        query: { modules: true, localIdentName: '[name]_[local]_[hash:base64:5]',
          sourceMap: true, url: false,}
      },
      { test: /\.(sass|scss)$/, use: 'sass-loader'},
      { test: /\.png$/, loader: 'file-loader'},
      { test: /\.(tff|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/, loader: 'file-loader'}
    ]
  },
  resolve: { extensions: ['.js', '.jsx']},
  devServer: { historyApiFallback: true, contentBase: './'},
  plugins: [
    HtmlWebpackPluginConfig,
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true, compress: { warnings: false }
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ] 
}