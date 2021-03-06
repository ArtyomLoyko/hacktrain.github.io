const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const conf = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'main.js'
  },
  devServer:{
    overlay: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader", "sass-loader"]
        })
      },
      {
        test: /\.ttf$/,
        loader: 'file-loader'
      },
      {
        test: /\.png$/,
        loader: 'file-loader'
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("styles.css")
  ]
};

module.exports = (env, options) => {
  const production = options.mode === 'production';

  conf.devtool = production ? false : 'eval-sourcemap';

  return conf;
} 