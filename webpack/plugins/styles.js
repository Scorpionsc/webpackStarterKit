const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");
const autoprefixer = require("autoprefixer");

module.exports = (isDev) => (
    [
        new MiniCssExtractPlugin({
            filename: isDev ? '../css/[name].css' : '../css/[name].[hash].css',
            chunkFilename: isDev ? '../css/[id].css' : '../css/[id].[hash].css',
        }),
        new webpack.LoaderOptionsPlugin({
            options: {
                postcss: [
                    autoprefixer()
                ]
            }
        }),
    ]
);
