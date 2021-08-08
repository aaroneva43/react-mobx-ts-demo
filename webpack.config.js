const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const customTheme = require("./theme");

module.exports = {
  mode: "development",
  entry: "./src/App.tsx",
  devServer: {
    contentBase: "./dist",
    historyApiFallback: true
  },
  resolve: {
    extensions: [".ts", ".js", ".jsx", ".tsx", ".less"]
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "webpack.bundle.js"
  },
  module: {
    rules: [
      { test: /\.(ts|js)x?$/, exclude: /node_modules/, use: "ts-loader" },
      // antd less
      {
        test: /antd.*\.less$/,
        use: [
          "style-loader",
          {
            loader: "css-loader"
          },
          {
            loader: "less-loader",
            options: {
              modifyVars: customTheme,
              javascriptEnabled: true
            }
          }
        ],
        include: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              url: false
            }
          }
        ]
      },
      // Project LESS Loader
      {
        test: /\.less$/,
        use: [
          "classnames-loader",
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: {
                mode: "local",
                localIdentName: "[name]__[local]___[hash:8]"
              }
            }
          },
          {
            loader: "less-loader",
            options: {
              javascriptEnabled: true
            }
          }
        ],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html"
    }),
    new CleanWebpackPlugin()
  ]
};
