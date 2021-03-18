// http is part of core modules.
// You need not do an npm install to use this one
const http = require('http');

// Defining the behaviour of the server

const server = http.createServer((req, res) => {
  const { host, accept } = req.headers;
  const userAgent = req.headers['user-agent'];
  console.log('Got a request from', req.socket.remoteAddress);
  console.log('Accept', accept);
  console.log('Host', host);
  console.log('user-agent', userAgent);
  res.statusCode = 200;
  res.end('whatever you need');
});

// Starts the server to listen for requests at a specified port
server.listen(3001, () => {
  console.log(`Server running at port`, 3001);
});