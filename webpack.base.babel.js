import htmlWebpackPlugin from 'html-webpack-plugin';
import cleanWebpackPlugin from 'clean-webpack-plugin';

export default {
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
      inject: 'body',
    }),
  ]
};
