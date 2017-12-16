import path from 'path';
import htmlWebpackPlugin from 'html-webpack-plugin';
import cleanWebpackPlugin from 'clean-webpack-plugin';

export default {
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, "src"),
        loader: "babel-loader",
        exclude: /node_modules/
      },
    ]

  },
  plugins: [
    new cleanWebpackPlugin(['dist']),
    new htmlWebpackPlugin({
      template: './src/index.html',
      title: 'Market App',
      filename: 'index.html',
      inject: 'body',
      minify: {
        collapseWhitespace: true,
      },
    }),
  ]
};
