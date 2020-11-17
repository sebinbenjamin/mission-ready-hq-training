/**
 *  
 * * Asynchronously reads the entire contents of a file.
 *         fs.readFile(file, [encoding], [callback]);
 * 
 * Callback is a function to call when the file has been read and the contents are ready
 * In this example, (req, res) => { ...} . It is passed two arguments, error and data.
 *      - If there is no error, error will be null and data will contain the file contents
 *      - Otherwise err contains the error message.
 * 
 */

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  fs.readFile('./pathParamsss.js', 'utf8', (err, data) => {
    if (!err) {
      console.log('The file read contains', data);
      res.setHeader('Content-Type', 'text/javascript');
      res.statusCode = 200;
      res.end(data);
    } else {
      console.log('Unable to read file', err.message);
      res.statusCode = 500;
      res.end(err.message);
    }
  });
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
