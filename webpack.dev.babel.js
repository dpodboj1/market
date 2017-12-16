import webpack from 'webpack';
import path from 'path';
import merge from 'webpack-merge';
import base from './webpack.base.babel.js';

const config = {
  entry: [
    'react-hot-loader/patch',
    './src/index.js'
  ],
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: "/"
  },
  devtool: 'cheap-eval-source-map',
  devServer: {
    hot: true,
    compress: true,
    publicPath: "/",
    port: 8000,
    contentBase: './dist',
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ]
};

export default merge(base, config);
