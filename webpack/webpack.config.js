const path = require('path');
const getAllEntries = require('./plugins/entries');
const getModules = require('./modules/modules');
const getPlugins = require('./plugins/plugins');

module.exports = (env, argv) => {

    const isDev = argv.mode==='development';
    const distPath = isDev ? 'dist' : 'build';
    const entries = getAllEntries();
    const dirName = __dirname;

    return {
        entry: entries,
        output: {
            path: path.resolve(dirName, `../${distPath}/js`)
        },
        resolve: {
            extensions: [".ts", ".tsx", ".js"]
        },
        module: getModules(isDev),
        plugins: getPlugins(isDev, distPath, dirName),
        devServer: {
            contentBase: path.join(__dirname, '../dist'),
            compress: true,
            port: 9000,
            writeToDisk: true,
        },
    };

};
