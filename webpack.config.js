const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin"); // installed package

module.exports = (env) => {
    const { mode } = env || {};
    console.log(env) // can change config according to env
    return {
        mode,
        output: {
            filename: "bundle.js"
        },
        plugins: [new HtmlWebpackPlugin(), new webpack.ProgressPlugin()],
    }
}