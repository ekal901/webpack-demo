const path = require('path'); //노드 기본 제공모듈 path
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js', //index.js의 모든모듈을 가져와서 output에 만듬
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist') //현재경로 기준, dist폴더를 만듬
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },
  plugins: [
      new HtmlWebpackPlugin()
  ]
};