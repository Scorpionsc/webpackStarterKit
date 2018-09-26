const fs = require('fs');
const path = require('path');

function getAllEntries(templateDir) {

    const entriesPath = [
        'src/js/entry/',
        'src/ts/entry/',
        'src/scss/entry/'
    ];

    const entries = {};

    entriesPath.forEach(pathItem => {

        try {
            fs.readdirSync(path.resolve(__dirname, `../../${pathItem}`)).map((file) => {

                const fileName = file.split('.')[0];

                if (!entries[fileName]) entries[fileName] = [];

                entries[fileName].push(`./${pathItem}${file}`)

            });
        } catch (err) {
            if (err.code === 'ENOENT') {
                console.log('File not found!');
            } else {
                throw err;
            }
        }



    });

    return entries;

}

module.exports = getAllEntries;
