const path = require("path");
const Dotenv = require("dotenv-webpack");

module.exports = {
  entry: "./src/index.js",
  devtool: "inline-source-map",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [new Dotenv()],
};
