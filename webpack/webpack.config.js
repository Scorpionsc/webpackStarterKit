const path = require('path');
const modules = require('./modules/modules');
const plugins = require('./plugins/plugins');


module.exports = {
    entry: {
        main: './src/js/entry/main.js',
        index: './src/js/entry/index.js'
    },
    output: {
        path: path.resolve(__dirname, '../dist/js')
    },
    module: modules,
    plugins: plugins,
};
