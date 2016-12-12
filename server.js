var webpack = require("webpack");
var webpackDevServer = require("webpack-dev-server");
var config = require("./webpack.development.config.js");
var path = require("path");

var compiler = webpack(config);

var server = new webpackDevServer(compiler, {
  filename: config.output.filename,
  contentBase: "public",
  hot: true,
  stats: {
    colors: true
  }
});

server.listen(8080, "localhost", function() {})

