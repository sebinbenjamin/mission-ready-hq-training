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
  /**
   * fs.readFile(file, [encoding], [callback]);
   * 3 arguments for readFile
   *    file            - name of the file to be read
   *    encoding         - character encoding used to save the file.
   *    callback function - function that is called when the read operation is completed. 
   *                      - It takes at least 1 parameter, first one being the error object 
   */
  fs.readFile('./pathParams.js', 'utf8', 
  (err, file_contents) => {
              // 1 - error object
              // 2 - the result of the operation done by the method
              res.setHeader('Content-Type', 'text/javascript');
              res.statusCode = 200;
              res.end(file_contents);
            }
  );

  console.log('After Read Method');
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
