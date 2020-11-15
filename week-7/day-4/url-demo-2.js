const http = require('http');
const urlModule = require('url');

// Defining the behaviour of the server
const server = http.createServer((req, res) => {
  const { url } = req;
  console.log('Received request to endpoint', url);
  res.statusCode = 200;
  res.end(`
      <h1 style="color:red">Here is the url called: 
      </h1>
      <h2>
      ${url}
      </h2>
    `);
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
