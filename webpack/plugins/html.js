const HtmlWebpackPlugin = require('html-webpack-plugin');
const fs = require('fs');
const path = require('path');
const HtmlBeautifyPlugin = require('html-beautify-webpack-plugin');

function generateHtml(templateDir, dirName) {

    const templateFiles = fs.readdirSync(path.resolve(dirName, `${templateDir}`));

    return templateFiles.map(item => {
        const parts = item.split('.');
        const name = parts[0];
        const extension = parts[1];

        return new HtmlWebpackPlugin({
            filename: `../${name}.html`,
            beautify: true,
            template: `!!ejs-webpack-loader!${path.resolve(dirName, `${templateDir}/${name}.${extension}`)}`,
            inject: false,
        });

    });

}

module.exports = (dirName) => {

    const templateDir = '../src/html/views';

    return generateHtml(templateDir, dirName).concat(
            new HtmlBeautifyPlugin({
                config: {
                    html: {
                        "max_preserve_newlines": 1
                    }
                }
            })
        );

};


