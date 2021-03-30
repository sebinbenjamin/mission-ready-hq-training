/**
 *
 * Path parameters are often used to inform the server,
 * which item(s) it should send back to the website, such as a particular user’s profile details.
 *
 * For example, in github.com/sebinbenjamin, 'sebinbenjamin' is the path parameter
 * that tells the server which profile to send back to the client.
 *
 * Path parameters have to be used in the same position that they were specified in the back end code
 *
 * */

const http = require('http');

// Defining the behaviour of the server
const server = http.createServer((req, res) => {
  const { url } = req;
  console.log('URL', url);
  
  // const pathParams_WithSpaces = url.split('/');
  // const pathParams = pathParams_WithSpaces.filter((path) => path != '');
  const pathParams = url.split('/').filter((path) => path != '');
  console.log('pathParams', pathParams);

  res.statusCode = 200;
  res.end(pathParams.toString());
});

// http://localhost:3000/cars/sedane/bmw/1

const port = 3000;
server.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
