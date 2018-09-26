const CopyWebpackPlugin = require('copy-webpack-plugin');
var ImageminPlugin = require('imagemin-webpack-plugin').default;
const path = require('path');

module.exports = (isDev, distPath, dirName) => {
    plugins = [];

    plugins.push(
        new CopyWebpackPlugin([
            {
                from: path.resolve(dirName, '../src/img'),
                to: path.resolve(dirName, `../${distPath}/img`)
            }
        ])
    );

    if( isDev ){
        plugins.push(new ImageminPlugin({ test: /\.(jpe?g|png|gif|svg)$/i }));
    }


    plugins.push(
        new CopyWebpackPlugin([
            {
                from: path.resolve(dirName, '../src/pic'),
                to: path.resolve(dirName, `../${distPath}/pic`)
            }
        ])
    );

    return plugins;

};
