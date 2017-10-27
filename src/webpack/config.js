const path = require('path');
// const autoprefixer = require('autoprefixer');
const webpack = require('webpack');
// const importer = require('postcss-import');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    client: __dirname + '/../client/index.js'
  },

  output: {
    filename: 'client.js',
    path: path.resolve(__dirname, '../../dist')
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                modules: true,
                importLoaders: 1,
                localIdentName: '[name]_[local]__[hash:base64:5]'
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins: () => [require('postcss-import'), require('autoprefixer')]
              }
            }
          ]
        })
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'react'],
            plugins: ['transform-object-rest-spread']
          }
        }
      }
    ]
  },

  plugins: [
    new ExtractTextPlugin("main.css")
  ],
    
  devtool: 'source-map'
};