import path from 'path';
import htmlWebpackPlugin from 'html-webpack-plugin';
import cleanWebpackPlugin from 'clean-webpack-plugin';

export default {
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: "/"
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, loader:'babel-loader', exclude: /node_modules/ },
    ]
  },
  plugins: [
    new cleanWebpackPlugin(['dist']),
    new htmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      inject: 'body'
    }),
  ]
};
