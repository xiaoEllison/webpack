const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "lib"),
    filename: "webpack.demo.js",
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "index.html",
    }),
    // ,
    // new VueLoaderPlugin(),
  ],

  //浏览器配置，port取值0-65535
  devServer: {
    port: 47623,
    open: true,
  },
  //配置css/less/file
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.less$/i,
        use: ["style-loader", "css-loader", "less-loader"],
      },
      //图片格式
      {
        test: /\.(png|gif|jpeg)$/i,
        type: "asset",
        // parser:{
        //   dataUrlCondition:{
        //     maxSize:21*1024//设置大小
        //   }
        // }
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/i,
        type: "asset/resource",
        generator: {
          filename: "fonts/[hash:6][ext]",
        },
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"], // 预设:转码规则(用bable开发环境本来预设的)
          },
        },
      },
    //   {
    //     test: /\.vue$/,
    //     use: ["vue-loader"]
    //   },
    ],
  },
};
