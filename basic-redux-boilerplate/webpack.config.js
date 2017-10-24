const webpack = require('webpack');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: 'index.html',
  inject: 'body'
})

module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'index_bundle.js'
  },
  module: {
    loaders: [
      { test: /\.(js|jsx|es6)$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.(sass|scss)$/, use: 'style-loader'},
      { test: /\.(sass|scss)$/, loader: 'css-loader',
        query: { modules: true, localIdentName: '[name]_[local]_[hash:base64:5]',
          sourceMap: true, url: false,}
      },
      { test: /\.(sass|scss)$/, use: 'sass-loader'}
    ]
  },
  resolve: { extensions: ['.js', '.jsx']},
  devServer: { historyApiFallback: true, contentBase: './'},
  plugins: [HtmlWebpackPluginConfig] 
}