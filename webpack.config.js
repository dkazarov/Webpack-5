const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'main.bundle.js',
    clean: true,
  },

  plugins: [
     new HtmlWebpackPlugin()
   ],
};