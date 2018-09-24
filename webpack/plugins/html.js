const HtmlWebpackPlugin = require('html-webpack-plugin');
const fs = require('fs');
const path = require('path');


function generateHtmlPlugins(templateDir) {

    const templateFiles = fs.readdirSync(path.resolve(__dirname, `${templateDir}`));

    return templateFiles.map(item => {
        const parts = item.split('.');
        const name = parts[0];
        const extension = parts[1];

        return new HtmlWebpackPlugin({
            filename: `../${name}.html`,
            beautify: true,
            template: `!!ejs-webpack-loader!${path.resolve(__dirname, `${templateDir}/${name}.${extension}`)}`,
            inject: false,
        });

    });

}


module.exports = generateHtmlPlugins;

