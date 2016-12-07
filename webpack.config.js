const WebpackBrowserPlugin = require("webpack-browser-plugin");
const BellOnBundlerErrorPlugin = require("bell-on-bundler-error-plugin");

module.exports = {
  context: __dirname + "/src",
	entry: {
    app: "./app.js",
  },
  output: {
    path: __dirname + "/dist",
    filename: "[name].bundle.js",
    publicPath: "/assets"
  },
  devServer: {
    contentBase: __dirname + "/src",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [{
          loader: "babel-loader",
          options: { presets: ["es2015"] }
        }],
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          { loader: "css-loader", options: { modules: true } }
        ],
      },
    ],
  },
};
