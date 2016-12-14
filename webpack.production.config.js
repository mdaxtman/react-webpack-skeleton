var path = require("path");
var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  context: path.join(__dirname, "src"),
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, "public/"),
    filename: "app.bundle.js",
    publicPath: "/",
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ["babel-loader"],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        loaders: ExtractTextPlugin.extract([
         "css-loader?modules&localIdentName=[hash:base64:10]&importLoaders=1",
         "postcss-loader",
        ]),
        exclude: /node_modules/,
      },
      {
        test: /\.json$/,
        loaders: ["json-loader"], 
        exclude: /node_modules/,
      },
      {
        test: /\.(woff|woff2|eot|ttf|png|jpg|gif)$/,
        loaders: ["url-loader?name=assets/[hash:12].[ext]&limit=10000"], 
        exclude: /node_modules/,
      },
      {
        test: /.svg$/,
        loaders: [
          "raw-loader",
          "image-webpack-loader",
        ],
        exclude: /node_modules/,
      },
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    new ExtractTextPlugin("styles.css"),
    new HtmlWebpackPlugin({
      template: "index.template.html",
      inject: "body"
    })
  ],
}
