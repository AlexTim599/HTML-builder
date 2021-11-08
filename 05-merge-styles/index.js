const fs = require('fs');
const path = require('path');

const pathReadFolder = path.join(__dirname, 'styles');
const bum = path.join(__dirname, 'project-dist', 'bundle.css')

fs.writeFile(bum, '', (err) => {
    if (err)
        console.log('The file has been saved!');
});

fs.readdir(pathReadFolder, { withFileTypes: true }, (err, files) => {
    if (err) throw err;
    files.forEach(function(file) {
        let pathRead = path.join(pathReadFolder, file.name);
        let extname = path.extname(file.name);
        if (extname === '.css') {
            fs.readFile(pathRead, 'utf-8', (err, data) => {
                if (err) throw err;

                else {
                    fs.appendFile(bum, data, (err) => {
                        if (err)
                            throw err;
                    })
                }

            });


        }

    })
})