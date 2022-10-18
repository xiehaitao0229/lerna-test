const path = require('path');

module.exports = {
 mode: 'none',
 entry: './index.js',
 output: {
  filename: 'bundle.js',
  path: path.resolve(__dirname, 'dist')
 },
 module: {
  rules: [
   {
    test: /\.js$/,
     loader: 'babel-loader',
     exclude: /node_modules/
   }
  ]
 }
}