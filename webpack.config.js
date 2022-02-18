const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "main.bundle.js",
    clean: true,
  },

  module: {
    rules: [
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
      ],
},

plugins: [
   new MiniCssExtractPlugin({
      // filename: "style.bundle.css",  
      filename: '[name].[contenthash].css'
   }),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],

  devServer: {
   hot: true,
   open: true,
   static: {
     directory: path.join(__dirname, "./src"),
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
