var path = require("path");

var srcPath = path.resolve(__dirname, "src");
var distPath = path.resolve(__dirname, "dist");

var config = {
  entry: srcPath + "/app/app.js",
  output: {
    path: srcPath + "/app",
    filename: "bundle.js",
    publicPath: "/app/"
  },
  devServer: {
    inline: true,
    port: 4500
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    loaders: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          include: /src/,
          loader: "babel-loader",
          query: {
            presets: ['es2015', 'stage-2', 'react']
          }

        }, {
            // Transform our own .css files with PostCSS and CSS-modules
            test: /\.css$/,
            exclude: /node_modules/,
            use: ['style-loader', 'css-loader'],
        }, {
            // Do not transform vendor's CSS with CSS-modules
            // The point is that they remain in global scope.
            // Since we require these CSS files in our JS or CSS files,
            // they will be a part of our compilation either way.
            // So, no need for ExtractTextPlugin here.
            test: /\.css$/,
            include: /node_modules/,
            use: ['style-loader', 'css-loader'],
        },
        {
            test: /\.(png|woff|woff2|eot|ttf|svg)$/,
            include: /node_modules/,
            use: 'url-loader?limit=100000'
        }
    ]
  }
}

module.exports = config;