const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "js/main.bundle.js",
    assetModuleFilename: "assets/[hash][ext][query]",
    clean: true,
  },
  module: {
    rules: [
      // Html Loader
      {
         test: /\.html$/i,
         loader: "html-loader",
       },
      // MiniCssExtractPlugin
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  [
                    "postcss-preset-env",
                    {
                      // Options
                    },
                  ],
                ],
              },
            },
          },
          "sass-loader",
        ],
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      // Images
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      // for svg
      {
        test: /\.svg/,
        type: "asset/inline",
      },
      // Fonts
      {
         test: /\.(woff|woff2|eot|ttf|otf)$/i,
         type: 'asset/resource',
       },
       //babel
       {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
    ],
  },

  plugins: [
    new MiniCssExtractPlugin({
      // filename: "style.bundle.css",
      filename: "css/[name].[contenthash].css",
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
  // Dev Server
  devServer: {
    hot: true,
    open: true,
    static: {
      directory: path.join(__dirname, "./dist"),
      watch: true,
    },
    client: {
      overlay: true,
      // overlay: {
      //   errors: true,
      //   warnings: false,
      // },
    },
    compress: true,
    port: 9000,
  },
};
