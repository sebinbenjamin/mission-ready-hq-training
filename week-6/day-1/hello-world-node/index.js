const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

// callback fn - gets executed on every request to server.
const serverHandler = (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
};

const server = http.createServer(serverHandler);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});