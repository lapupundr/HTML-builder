const fs = require('fs');
const path = require('path');
const process = require('process');

const filePath = path.join(__dirname, 'file.txt');
const writeStream = fs.createWriteStream(filePath);

process.stdout.write('Hello. For exit write "exit" or press Ctrl + C.\nPlease enter the name of the city where you have been this year:\n');

process.stdin.on('data', data => {
    if (data.toString().trim().toLowerCase() === 'exit') {
        process.exit();
    }
})

process.stdin.pipe(writeStream);

process.on('SIGINT', () => {
    process.exit();
  });
  
process.on('exit', () => {
    console.log('File writing completed.\nBye!');
  });