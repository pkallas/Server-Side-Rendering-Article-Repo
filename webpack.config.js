const path = require('path');

module.exports = {
  entry: ['./src/client/index.js'],
  output: {
    path: path.join(__dirname, 'build'),
    fileName: 'bundle.js',
  },
  module: {
    rules: [
      {
        exclude: [
          /node_modules/,
          /\.html$/,
          /\.(js|jsx)$/,
          /\.css$/,
        ],
      }, {
        test: /\.(js|jsx)?$/,
        loader: 'babel-loader',
        include: [/(src)/],
        query: {
          presets: ['es2015', 'react'],
        },
      },
    ],
  },
};
