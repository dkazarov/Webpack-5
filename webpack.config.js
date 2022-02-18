const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

let mode = 'development';

if ( process.env.NODE_ENV === 'production') {
   mode = 'development';
}

console.log(mode + ' mode');

module.exports = {
   mode : mode,
   entry: './src/index.js',
   output: {
     path: path.resolve(__dirname, './dist'),
     filename: 'main.bundle.js',
   },
   plugins: [
      new HtmlWebpackPlugin({
         // tempalate: './src/index.html'
      })
   ],
 };