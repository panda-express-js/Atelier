// # webpack.config.js
const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports = {
  mode: "development",
  entry: path.join(__dirname, "/client/src/index.jsx"),
  output : {
    path: path.resolve(__dirname, "client", "dist")
  },
  module: {
    rules: [
      {
        test:  /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env','@babel/preset-react']
          }
        }
      },
      {
        test: /\.css$/, // Rule for CSS files
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  devServer: {
    static: {directory: path.join(__dirname, 'client/dist')},
    open: true,
    hot: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "index.html")
    }),
    new webpack.ProvidePlugin({
      process: 'process/browser',
    })
  ]
}
