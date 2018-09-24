
const generateHtmlPlugins = require('./html');
const HtmlBeautifyPlugin = require('html-beautify-webpack-plugin');
const htmlPlugins = generateHtmlPlugins('../../src/html/views');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = [
    new MiniCssExtractPlugin()
].concat(htmlPlugins, new HtmlBeautifyPlugin({
    config: {
        html: {
            "max_preserve_newlines": 1
        }
    }
}));
