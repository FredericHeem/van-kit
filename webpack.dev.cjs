/*eslint-env node */
const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const webpackDevConfig = {
  overrides: {
    mode: "development",
    entry: {
      public: ["./src/entry.js"],
    },
  },

  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("development"),
      },
    }),
  ],

  rules: [
    {
      test: /\.css$/,
      use: [MiniCssExtractPlugin.loader, "css-loader"],
    },
    {
      test: /\.(js|jsx|ts|tsx)$/,
      use: ["ts-loader"],
      include: path.join(__dirname, "src"),
      exclude: path.join(__dirname, "node_modules"),
    },
  ],
  eslint: {
    emitWarning: true,
  },
};

module.exports = require("./webpack.config")(webpackDevConfig);
