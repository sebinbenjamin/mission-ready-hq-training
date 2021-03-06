const http = require('http');

// callback fn - gets executed on every request to server.
const serverHandler = (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.end('API response, ie, Server says Hello World');
};

const server = http.createServer(serverHandler);

const port = 3000;
server.listen(port, () => {
  console.log(`Server running at port ${port}/`);
});
