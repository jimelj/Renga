var path = require('path');

// build_dir represents the directory path of the bundle file output
var BUILD_DIR = path.resolve(__dirname, 'public');
// app_dir holds the directory path of the react application's codebase
var APP_DIR = path.resolve(__dirname, 'app');

var config = {
  entry: APP_DIR + '/app.js',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module : {
    rules : [
      {
        test : /.jsx?/,
        exclude: /(node_modules|bower_components)/,
        include: APP_DIR,
        loader : 'babel-loader',
        query: {
          presets: ['react', ['es2015', { "modules": false  }]]
        }
      },
      {
        test: /\.scss$/,
        use: [ 'style-loader', 'css-loader', 'sass-loader' ]
      },
      {
      test: /\.jpe?g$|\.gif$|\.png$|\.ttf$|\.eot$|\.svg$/,
      use: 'file-loader?name=[name].[ext]?[hash]'
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&mimetype=application/fontwoff'
      },
    ]
  },
  resolve: {
    extensions: ['.jsx', '.js']
  },
  devServer: {
    contentBase: "public",
    hot: true
  }
};

module.exports = config;
