const path = require('path');
const generateHtmlPlugins = require('./plugins/html');
const HtmlBeautifyPlugin = require('html-beautify-webpack-plugin');

const htmlPlugins = generateHtmlPlugins('../../src/html/views');

module.exports = {
    entry: {
        main: './src/js/entry/main.js',
        index: './src/js/entry/index.js'
    },
    output: {
        path: path.resolve(__dirname, '../dist/js')
    },
    plugins: [

    ].concat(htmlPlugins, new HtmlBeautifyPlugin({
        config: {
            html: {
                "max_preserve_newlines": 1
            }
        }
    })),
};
