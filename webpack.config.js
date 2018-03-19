const path = require('path');

module.exports = {
  entry: ['./src/client/index.js'],
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
    chunkFilename: 'bundle.js',
  },
  mode: 'development',
  module: {
    rules: [
      {
        exclude: [
          /node_modules/,
          /\.html$/,
          /\.(js|jsx)$/,
          /\.css$/,
          /\.json$/,
        ],
      }, {
        test: /\.(js|jsx)?$/,
        loader: 'babel-loader',
        include: [/(src)/],
        query: {
          presets: ['env', 'react'],
        },
      },
    ],
  },
};
