import webpack from 'webpack';
import path from 'path';
import htmlwebpackplugin from 'html-webpack-plugin';

const hwpconfig = new htmlwebpackplugin({
  template: './src/index.html',
  filename: 'index.html',
  inject: 'body'
});

export default {
  entry: ['babel-polyfill', './src/index.js'],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, loader:'babel-loader', exclude: /node_modules/ },
    ]
  },
  plugins: [
    hwpconfig
  ]
};
