import merge from 'webpack-merge';
import uglifyJSPlugin from 'uglifyjs-webpack-plugin';
import base from './webpack.base.babel.js';

const config = {
  entry: './src/index.js',
  plugins: [
    new uglifyJSPlugin(),
  ],
};

export default merge(base, config);
