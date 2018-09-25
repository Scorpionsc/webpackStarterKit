const fs = require('fs');
const path = require('path');

function getAllEntries(templateDir) {

    const entriesPath = [
        '../../src/js/entry/',
        '../../src/scss/entry/'
    ];

    const result = {};

    entriesPath.forEach(pathItem => {

        fs.readdirSync(path.resolve(__dirname, pathItem ), (err, items) => {

            items.forEach( file => {

                const fileName = file.split('.')[0];


                if( !result[fileName] ) result[fileName] = [];

                result[fileName].push(file)


            } );

            console.log(result);


        });

    });

    console.log('-----------------');
    console.log(result);


}

module.exports = getAllEntries;
