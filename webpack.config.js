const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { merge } = require("webpack-merge");

const modeConfig = env => require(`./build-utils/webpack.${env}`)(env);

const presetConfig = env => require(`./build-utils/loadPresets`)(env);

module.exports = ({ mode, presets } = { mode: "production", presets: [] }) => {
    return merge(
        {
            mode,
            module: {
                rules: [{
                    test: /\.jpe?g$/,
                    /* use:["url-loader"] or */
                    use: [{
                        loader: "url-loader",
                        options: {
                            limit: 5000
                        }
                    }]
                }]
            },
            output: {
                filename: "bundle.js"
            },
            plugins: [new HtmlWebpackPlugin(), new webpack.ProgressPlugin()]
        },
        modeConfig(mode),
        presetConfig({mode, presets})
    );
};