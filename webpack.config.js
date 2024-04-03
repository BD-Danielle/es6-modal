const path = require('path');
const package = require('./package.json'); // 引入package.json文件

module.exports = {
  mode: 'production', //development
  entry: `./js/${package.name}${package.version}.js`, // 动态设置入口文件
  output: {
    path: path.resolve(__dirname, './js/webpack'),
    filename: `${package.name}.bundle${package.version}.js` // 动态设置输出文件名
  },
  module: {
    rules: [
      {
        test: /\.js$/, // 使用正則表達式匹配需要轉換的文件
        exclude: /node_modules/, // 排除不需要轉換的文件
        use: {
          loader: 'babel-loader', // 使用 babel-loader 進行轉換
          options: {
            presets: ['@babel/preset-env'] // 使用 @babel/preset-env 進行轉換
          }
        }
      }
    ]
  }
}