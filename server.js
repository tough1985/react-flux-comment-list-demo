//使用webpack-dev-server做开发服务器
//这是一个基于Node.js Express框架的开发服务器
//是一个静态资源服务器
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');

const PORT = 6062;

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,  //组件热替换
  noInfo: false,
  https: false,
  historyApiFallback: true
}).listen(PORT, (err) => {
  if (err) {
    console.log(err);
  }
  console.log('Listening at localhost:${PORT}');
});

//上述代码可以分解为以下形式
/*
var compiler = webpack(config);
var server = new WebpackDevServer(compiler, {
  publicPath: config.output.publicPath,
  hot: true,
  noInfo: false,
  https: false,
  historyApiFallback: true
});
server.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  }
  console.log('Listening at localhost:${PORT}');
})
*/
