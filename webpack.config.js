/**
 * webpack配置文件
 */
const path = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  //entry 参数定义了打包的入口文件，数组中所有文件会按照顺序打包。
  entry: [
    'webpack-dev-server/client?http://localhost:6062',
    'webpack/hot/only-dev-server',
    './index'
  ],
  //output 参数定义了打包后输出文件的位置
  output: {
    path: path.join(__dirname, 'dist'),   //打包文件存放的绝对路径
    filename: 'bundle.js',                //运行时的访问路径
    publicPath: '/static/'                //打包后的文件名
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  //module 模块
  //loaders 模块加载器
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'react-hot-loader!babel-loader',
      }, {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader'
      }, {
        test: /\.less/,
        loader: 'style-loader!css-loader!less-loader'
      },{
        test: /\.(png|jpg)$/,
        loader: 'url-loader?limit=8192'
      }
    ]
  }
};
