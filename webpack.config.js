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
      {test: /\.html$/, loader: 'raw-loader'},
      {test: /\.css$/, loader: 'style-loader!css-loader'},
      {test: /\.scss$/, loader: 'style-loader!css-loader!sass-loader'},
      {test: /\.(png|jpg|ttf)$/, loader: 'url-loader?limit=8192'}
    ]
  }
};
