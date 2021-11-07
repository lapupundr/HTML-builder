const fs = require('fs');
const path = require('path');

const textPath = path.join(__dirname, 'text.txt');

const textRead = fs.createReadStream(
    textPath,
    'utf8'
  );
  textRead.on('data', (data) => console.log(data));
  textRead.on('error', (err) => console.log(`Err: ${err}`));