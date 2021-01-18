const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  devServer: {

    contentBase: './dist',
    compress: true,
    port: 9000,
    historyApiFallback: true,
  },
  resolve: {
    extensions: ['.js'],
  },
  module:{
    rules:[
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use:{
          loader: 'babel-loader'

        }
      }
    ]
  },
  plugins:[
    new HtmlWebpackPlugin(
      {
        inject: true,
        template: './public/index.html',
        filename: './index.html',
      }
    ),
    new CopyWebpackPlugin({
      patterns: [
        {from: './src/styles/styles.css', to: ''}],
    })
  ]
}