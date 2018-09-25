const path = require('path');
const generateHtmlPlugins = require('./plugins/html');
const getAllEntries = require('./plugins/entries');
const HtmlBeautifyPlugin = require('html-beautify-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");
const autoprefixer = require("autoprefixer");

const entries = getAllEntries();
const htmlPlugins = generateHtmlPlugins('../../src/html/views');




module.exports = {
    entry: {
        main: ['./src/js/entry/main.js'],
        index: ['./src/js/entry/index.js']
    },
    output: {
        path: path.resolve(__dirname, '../dist/js')
    },
    module: {
        rules: [
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
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "postcss-loader"
                ]
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "postcss-loader",
                    "sass-loader"
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "../css/[name].bundle.css",
        }),
        new webpack.LoaderOptionsPlugin({
            options: {
                postcss: [
                    autoprefixer()
                ]
            }
        })
    ].concat(htmlPlugins, new HtmlBeautifyPlugin({
        config: {
            html: {
                "max_preserve_newlines": 1
            }
        }
    })),
};
