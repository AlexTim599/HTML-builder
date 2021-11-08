const fs = require('fs');
const readline = require('readline');
const path = require('path');
const { exit } = require('process');


const filePath = path.join('./02-write-file/text.txt');
const interface = readline.createInterface(process.stdin, process.stdout);



interface.question('Привет! Напишите что-нибудь и нажмите enter:  ', function(text) {
    console.log(`Вы ввели:  ${text} \n`);

});

interface.on('line', (line) => {
    if (line === `exit`) {
        process.stdout.write('Bay-bay my frend');
        exit();
    };

});

process.stdin.on('data', data => {
    fs.appendFile(filePath, data, (err) => {
        if (err) throw err;
    });
});

process.on('exit', () => {
    process.stdout.write(' Хорошего дня!');

});