const path = require('path');

let mode = 'development';

if ( process.env.NODE_ENV === 'production') {
   mode = 'development';
}

console.log(mode + ' mode');

module.exports = {
   mode: mode,
  entry: './src/index.js',
  output: {
   //  filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};