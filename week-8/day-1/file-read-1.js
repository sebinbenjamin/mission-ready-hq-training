const fs = require('fs');

try {
  // readFileSync - reads a file synchronously from the file system
  const resultOfReadingAFile = fs.readFileSync('./hello2.txt', 'utf-8');
  console.log('File contents:', resultOfReadingAFile);
} catch (e) {
  // the catch block is executed in case we come across an error, while executing anything in the try block
  console.log(e);
}

console.log('After the reading operation');
