const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '/text.txt');

// variant 1

// let stream = new fs.ReadStream(filePath, 'utf8');
// stream.on('readable',function() {
//     let data = stream.read();
//     console.log(data);
// });

// variant 2

let myStream = fs.createReadStream(filePath, 'utf8');
myStream.on('data', function(chunk) {
    console.log(chunk);
});