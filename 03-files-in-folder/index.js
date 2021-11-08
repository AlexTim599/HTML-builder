// const testFolder = './secret-folder/';
const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, './secret-folder');

fs.readdir(filePath, { withFileTypes: true }, (err, files) => {
    files.forEach(file => {
        if (file.isDirectory() === false) {
            const ext = path.extname(file.name);
            const fileName = path.basename(file.name, ext);

            console.log(`${fileName} | ${ext}`);
            fs.stat(path.join(filePath, file.name), (error, stats) => {
                console.log('Size: ', stats.size);
            });
        }
    });
})