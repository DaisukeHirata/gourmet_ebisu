import path from 'path'
import webpack from 'webpack'

export default {
  devtool: 'source-map',
  entry: {
    app: path.join(__dirname, 'index.js'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
  output: {
    path: __dirname + '/dist',
    filename: "./bundle.js",
    publicPath: 'http://localhost:8000/dist',
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      debug: true,
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
      },
    }),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    contentBase: __dirname,
    historyApiFallback: true,
    hot: true,
    inline: true,
    port: 8000,
    stats: {
      cached: false,
    },
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
  },
}
