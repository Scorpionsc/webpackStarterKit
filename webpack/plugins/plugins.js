const getStylesPlugins = require('./styles');
const getCopyPlugins = require('./copy');
const getImagesPlugins = require('./images');
const getHtmlPlugins = require('./html');


module.exports = (isDev, distPath, dirName) => {

    const stylesPlugins = getStylesPlugins(isDev);
    const copyPlugins = getCopyPlugins(distPath, dirName);
    const imagesPlugins = getImagesPlugins(isDev, distPath, dirName);
    const htmlPlugins = getHtmlPlugins(dirName);

    return [].concat(stylesPlugins, copyPlugins, imagesPlugins, htmlPlugins);

};
