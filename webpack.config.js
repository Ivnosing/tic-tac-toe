const path = require('path');

module.exports = {
  mode: 'production',
  entry: [
    './src/js/index.js',
    './src/scss/styles.scss'
  ],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist'
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'file-loader',
            options: { name: '[name].min.css' }
          },
          'sass-loader'
        ],
      }
    ]
  }
};
