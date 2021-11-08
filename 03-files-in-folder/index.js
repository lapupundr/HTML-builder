const { stat, readdir } = require('fs');
const path = require('path');

const dirPath = path.join(__dirname, 'secret-folder');

readdir(dirPath, ['utf8', 'true'], (err, files) => {
    for (const file of files) {
        const filePath = path.join(dirPath, file);
        stat(filePath, (err, stats) => {
            if (stats.isDirectory() === false) {
                console.log(`${path.parse(filePath).name} - ${path.extname(filePath).slice(1)} - ${stats.size / 1000}kb`)
            }
        })
    }
})

