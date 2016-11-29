module.exports = {
  context: __dirname + '/app',//上下文
  entry: './index.js',//入口文件
  output: {//输出文件
    path: __dirname + '/app',
    filename: './bundle.js'
  },
  module: {
    noParse: [/moment/],
    loaders: [//加载器
      {test: /\.html$/, loader: 'raw'},
      {test: /\.css$/, loader: 'style!css'},
      {test: /\.scss$/, loader: 'style!css!sass'},
      {test: /\.(png|jpg|ttf)$/, loader: 'url?limit=8192'}
    ]
  }
};
