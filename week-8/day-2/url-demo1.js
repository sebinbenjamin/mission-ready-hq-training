const http = require('http');

// Defining the behaviour of the server
const server = http.createServer((req, res) => {
  const { url, method, headers } = req;
  console.log('HTTP Method called', method);
  console.log('Received request to endpoint', url);

  res.statusCode = 200;
  res.end(`
      <h1 style="color:red">Here is the url called: 
      </h1>
      <h2>
      ${url}
      </h2>
      <h2> Method
      ${method}
      </h2>
      <h2> Headers
      ${JSON.stringify(headers)}
      </h2>
    `);
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
