const fs = require('fs');
const path = require('path');


const copyDirectoryPath = path.join('./06-build-page/project-dist/assets');
const copyDirectoryPath2 = path.join('./06-build-page/project-dist/index.html');
const copyDirectoryPath3 = path.join('./06-build-page/project-dist/style.css');
const styleFolder = path.join('./06-build-page/styles');
const setsFolder = path.join('./06-build-page/assets');


fs.mkdir(copyDirectoryPath, { recursive: true }, (err) => {
    if (err) {
        console.log('Directory not open');
    } else {
        console.log('Let`s start');
        fs.writeFile(copyDirectoryPath2, '', (err) => {
            if (err)
                console.log('err');
        });
        fs.writeFile(copyDirectoryPath3, '', (err) => {
            if (err)
                console.log('err');
        });
    }
})


// копируем стили

fs.readdir(styleFolder, { withFileTypes: true }, (err, files) => {
    if (err) throw err;
    files.forEach(function(file) {
        let pathRead = path.join(styleFolder, file.name);
        let extname = path.extname(file.name);
        if (extname === '.css') {
            fs.readFile(pathRead, 'utf-8', (err, data) => {
                if (err) throw err;
                else {
                    fs.appendFile(copyDirectoryPath3, data, (err) => {
                        if (err)
                            throw err;
                    })
                }

            });
        }
    })
})

// копируем папку assets


function copyDirectory(setsFolder, copyDirectoryPath) {

    fs.readdir(setsFolder, { withFileTypes: true, recursive: true }, (err, files) => {
        console.log(files);
        files.forEach(file => {
            if (file.isDirectory()) {
                console.log(file.isDirectory);
                const asset = (path.join(setsFolder, file.name));
                assetCopy = (path.join(copyDirectoryPath, file.name));
                console.log(assetCopy);
                copyDirectory = (asset, assetCopy);

            } else {
                fs.copyFile(path.join(setsFolder, file.name), path.join(copyDirectoryPath, file.name), (err) => {
                    if (err)
                        throw err;
                });

            }




        });

    });
}


copyDirectory();


// fs.(path.join(assetsFolder), { withFileTypes: true }, (err, files) => {
//     if (err) {
//         console.log('error');
//     } else {
//         console.log('Start reading folder');
//     }
//     files.forEach(file. => {
//         if (file.isFile()) {

//         }

//         fs.copyFile(path.join(assetsFolder, file.name), (path.join(copyDirectoryPath, file.name)), (err) => {
//             if (err) {

//                 console.log('error copy folder');
//             } else {
//                 console.log('Copy done!');
//             }
//         })
//     })
// })