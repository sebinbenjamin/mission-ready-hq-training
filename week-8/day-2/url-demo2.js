const http = require('http');

// Defining the behaviour of the server
const server = http.createServer((req, res) => {
  const { method, url, headers } = req;
  const userAgent = headers['user-agent'];

  console.log('Got a request !');
  res.setHeader('Content-Type', 'text/html');
  res.setHeader('Content-Language', 'en-US');
  // res.setHeader('Content-Language', 'de-CA');

  // This is an endpoint to the get the users
  if (method === 'GET' && url === '/users') {
    res.setHeader('Content-Type', 'application/json');
    console.log('Got a good GET request to /users', { method, url });
    res.statusCode = 200;
    res.end(`{ "userList" : ["user1","user22","user23"]}`);
  // This is an endpoint to the get the cars
  } else if (method === 'GET' && url === '/cars') {
    console.log('Got a good GET request to /cars', { method, url });
    res.statusCode = 200;
    res.end(`
      <h1 style="color:red">Heres a car for you 
        <img src="https://toy-content.imgix.net/product/siku-1598nz-police-car-2~1581385230.jpg?w=310&h=310&fit=fill&fm=jpg&bg=0FFF&s=6728508bd0df5747d04dd52d31df61cb">
      </h1>
    `);
  } else {
    console.log('Got a bad request', { method, url });
    res.statusCode = 400;
    res.end('Bad Request');
  }
});

const port = 3000;

// Starts the server to listen for requests at a specified port
server.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
