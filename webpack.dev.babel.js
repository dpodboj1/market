import webpack from 'webpack';
import merge from 'webpack-merge';
import base from './webpack.base.babel.js';

const config = {
  entry: [
    'react-hot-loader/patch',
    './src/index.js'
  ],
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
