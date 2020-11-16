const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  // https://cs.lmu.edu/~ray/notes/charenc
  const data = fs.readFileSync('./pathParams.js', 'utf8');
  console.log('The file contains *******', data);

  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types
  res.setHeader('Content-Type', 'text/javascript');
  res.statusCode = 200;
  res.end(data);
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
