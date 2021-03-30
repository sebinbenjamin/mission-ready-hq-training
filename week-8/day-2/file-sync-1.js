/**
 *
 * * Synchronously reads the entire contents of a file.
 *
 * An encoding is an optional parameter that specifies the type of encoding to read the file. Possible encodings are 'ascii', 'utf8', and 'base64'.
 * https://cs.lmu.edu/~ray/notes/charenc
 *
 * Content Type Header - Content-Type entity header is used to indicate the media type of the resource.
 *      Tells the client what the content type of the returned content actually is -
 *      https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Type
 *
 * A MIME type - indicates the nature and format of a document, file, or assortment of bytes
 *      https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types
 */

const http = require('http');
const fs = require('fs'); // importing the file system module

const server = http.createServer((request, response) => {
  const file_contents = fs.readFileSync(
    './hello-filesystem-module.txt',
    'utf-8'
  );
  console.log('The file contains: ', file_contents);

  // response.setHeader('Content-Type', 'application/json');
  // response.setHeader('Content-Type', 'text/html');
  response.setHeader('Content-Type', 'text/plain');

  // Allows CORS request
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.statusCode = 200;
  
  // Sending back the file contents as the response to the HTTP request.
  response.end(file_contents);  // => text/plain
  // response.end(`{ "someKey" : "someValue" }`); // => application/json
  // response.end(`  <h1 style="color:red">Heres a car for you 
  // <img src="https://toy-content.imgix.net/product/siku-1598nz-police-car-2~1581385230.jpg?w=310&h=310&fit=fill&fm=jpg&bg=0FFF&s=6728508bd0df5747d04dd52d31df61cb">
  // </h1>`); // => text/html
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
