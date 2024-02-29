// # webpack.config.js
const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
require("dotenv").config();


module.exports = {
  mode: "none",
  entry: path.join(__dirname, "/client/src/index.jsx"),
  output : {
    path: path.resolve(__dirname, "client", "dist"),
    filename: "output.js"
  },
  module: {
    rules: [
      {
        test:  /\.(js|jsx)/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "/client", "/dist", "/index.html"),
    }),
    new webpack.ProvidePlugin({
      process: 'process/browser',
    })
  ]
}
