/**
 *  
 * * Asynchronously reads the entire contents of a file.
 *         fs.readFile(file, [encoding], [callback]);
 * 
 * Callback is a function to call when the file has been read and the contents are ready
 * In this example, (req, res) => { ...} . It is passed two arguments, error and data.
 *      - 1. All good case : If there is no error, error will be null and data will contain the file contents
 *      - 2. Error case : Otherwise err contains the error message.
 * 
 */

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  fs.readFile('./pathParamsss.js', 'utf8', (err, data) => {
    if (!err) {
      // No error ie err is 'undefined' => Read operation was successful
      console.log('The file read contains', data);
      res.setHeader('Content-Type', 'text/javascript');
      res.statusCode = 200;
      res.end(data);
    } else {
      // Handle the error scenario here.
      console.log('Unable to read file', err.message);
      res.statusCode = 500;
      res.end(err.message);
    }
  });
});

const port = 4321;
server.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
