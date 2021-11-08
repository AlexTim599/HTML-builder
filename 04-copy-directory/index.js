const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'files');
const copyDirectoryPath = path.join(__dirname, 'files-copy');


fs.mkdir(copyDirectoryPath, { recursive: true }, (err) => {
    if (err) {
        console.log('Directory not open');
    } else {
        console.log('Let`s start');
    }
})

fs.readdir(path.join(directoryPath), { withFileTypes: true }, (err, files) => {
    if (err) {
        console.log('error');
    } else {
        console.log('Start reading folder');
    }

    files.forEach(file => {
        fs.copyFile(path.join(directoryPath, file.name), (path.join(copyDirectoryPath, file.name)), (err) => {
            if (err) {
                console.log('error copy folder');
            } else {
                console.log('Copy done!');
            }
        })
    })
})