import webpack from 'webpack';
import path from 'path';
import merge from 'webpack-merge';
import uglifyJSPlugin from 'uglifyjs-webpack-plugin';
import base from './webpack.base.babel.js';

const config = {
  entry: {
    main: './src/index.js',
    vendor: [
      'react',
      'react-dom',
      'firebase',
      'react-hot-loader',
      'semantic-ui-react'
    ]
  },
  output: {
    filename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: "/"
  },
  plugins: [
    new uglifyJSPlugin(),
    new webpack.HashedModuleIdsPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest'
    })
  ],
};

export default merge(base, config);
