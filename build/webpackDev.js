const webpack = require('webpack')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpackBase')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
module.exports = merge(baseWebpackConfig, {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new FriendlyErrorsPlugin()
  ]
})
