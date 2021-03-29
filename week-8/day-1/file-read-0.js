const fs = require('fs');

// readFileSync - reads a file synchronously from the file system
// No error handling code implemented.
// Program halted on encountering an error.
const resultOfReadingAFile = fs.readFileSync('./hello2.txt', 'utf-8');

console.log("File contents:", resultOfReadingAFile);