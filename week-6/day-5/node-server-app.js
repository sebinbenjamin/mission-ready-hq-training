const http = require('http');

// Defining the behaviour of the server
const server = http.createServer((request, response) => {
  const { method, url } = request;
  console.log('Got a request !: ', method, url);
  response.setHeader("Access-Control-Allow-Origin", "*");

  if (url === '/user') {
    response.statusCode = 200;
    response.end('You have requested for a user');
  } 
  else if (url === '/baloon') {
    response.statusCode = 200;
    response.end(
      `
      <h1 style="color:blue">Heres your baloon 
      <img src="https://cdn5.vectorstock.com/i/1000x1000/05/84/blue-baloon-vector-1070584.jpg">
      </h1>
      `
      );
    } 
    else if (url === '/car') {
    response.statusCode = 200;
    response.end(`
    <h1 style="color:red">Heres a car for you 
    <img src="https://toy-content.imgix.net/product/siku-1598nz-police-car-2~1581385230.jpg?w=310&h=310&fit=fill&fm=jpg&bg=0FFF&s=6728508bd0df5747d04dd52d31df61cb">
    </h1>
    `);
  } 
  else {
    // handles everything other than car,baloon and user
    response.statusCode = 400;
    // sent the Hello world response
    response.end('Bad API request');
  }
});

const port = 8080;

// Starts the server to listen for requests at a specified port
server.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
