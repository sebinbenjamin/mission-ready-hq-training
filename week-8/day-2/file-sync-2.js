/**
 *
 ** Synchronously reads the entire contents of a file.
 *
 * Error handling in synchronous methods need to be implemented using Try - Catch blocks
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch
 *
 * The error object is a built-in object that provides a standard set of useful information when an error occurs, such as 
 *    1. A stack trace      - error.stack
 *    2. the error message  - error.message
 * 
 *  error.stack  - shows you where an error came from, as well as a list of the function calls that preceded it - for your convenience
 *
 */

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  try {
    const data = fs.readFileSync('./HELLO.txt', 'utf8');
    console.log('The file contains *******', data);
    res.setHeader('Content-Type', 'text/javascript');
    res.statusCode = 200;
    res.end(data);
  } catch (err) {
    console.log('Unable to read file', err.message);
    res.setHeader('Content-Type', 'text/plain');
    res.statusCode = 500;    
    res.end(err.message);
  }
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
