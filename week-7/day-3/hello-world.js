const http = require('http');

// Defining the behaviour of the server
const server = http.createServer((req, res) => {
  console.log('Got a request !');
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.setHeader('Content-Language', 'de-CA');
  // res.setHeader('Content-Language', 'en-US')
  
  // sent the Hello world response
  res.end('<h1 style="color:red">Hello, World!</h1>');
});

const port = 3000;

// Starts the server to listen for requests at a specified port
server.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
