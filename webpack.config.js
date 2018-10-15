const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
console.log(path.join(__dirname, "src/index.ts"));
module.exports = {
  entry: path.join(__dirname, "src/index.ts"),
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "lib")
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        loader: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  devServer: {
    index: "index.html"
  }
};
