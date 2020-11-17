/**
 * * Asynchronously read the entire contents of a file
 *        fs.readFile(file, [encoding], [callback]);
 *
 * An encoding is an optional parameter that specifies the type of encoding to read the file. Possible encodings are 'ascii', 'utf8', and 'base64'.
 * Callback is a function to call when the file has been read and the contents are ready.
 */

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  console.log('Before Reading file');
  fs.readFile('./pathParams.js', 'utf8', (err, data) => {
    res.setHeader('Content-Type', 'text/javascript');
    res.statusCode = 200;
    res.end(data);
  });
  console.log('After Read Method');
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
