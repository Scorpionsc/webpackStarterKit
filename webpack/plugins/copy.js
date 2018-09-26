const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = ( distPath, dirName) => (
    [
        new CopyWebpackPlugin([
            {
                from: path.resolve(dirName, '../src/vendors'),
                to: path.resolve(dirName, `../${distPath}/vendors`)
            }
        ]),
        new CopyWebpackPlugin([
            {
                from: path.resolve(dirName, '../src/mock'),
                to: path.resolve(dirName, `../${distPath}/mock`)
            }
        ]),
    ]
);
