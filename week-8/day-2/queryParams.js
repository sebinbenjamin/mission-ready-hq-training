/**
 * The standard format of query parameters in a URL is
 *
 *   https://mywebapp.com/some/path?key1=value1&key2=value2&key3=value3
 *
 * The first query string’s key is always preceded by a ?, and followed by a =, which is followed by the value.
 * A ? is used to denote the end of the path (including any path parameters), and the start of query strings.
 *
 * QueryStrings - can be appended to the end of the URL regardless of whether or not they were specified in coded route.
 *
 */

const http = require('http');
const urlModule = require('url');
const queryStringModule = require('querystring');

// Defining the behaviour of the server
const server = http.createServer((req, res) => {
  const { url } = req;

  // In browser => http://localhost:3000/vehicle/land/cars?type=sedan&color=My fav color is blue
  console.log('url', url);
  // url =>  /vehicle/land/cars?type=sedan&color=My%20fav%20color%20is%20blue

  const queryParams = urlModule.parse(url).query;
  console.log('Query Parameters', queryParams);
  // queryParams =>  type=sedan&color=My%20fav%20color%20is%20blue

  const queryStrings = queryStringModule.parse(queryParams);
  // type=sedan&color=My fav color is blue is turned into a 
  // queryStrings Object => 
  //                       {
  //                         type: 'sedan',
  //                         color: 'My fav color is blue'
  //                       }
  console.log('All queryStrings:', queryStrings);
  console.log('Car type:', queryStrings['type']);
  console.log('Car color:', queryStrings.color);

  res.statusCode = 200;
  res.end(`
      <h1 style="color:${queryStrings.color}">
        Here are the query parameters called: 
      </h1>
      <h2 style="color:${queryStrings.color}">
        Type ${queryStrings.type} <br>
        Color ${queryStrings.color}
      </h2>
    `);
});

// http://localhost:3000/cars?type=sedan&color=blue

const port = 3000;
server.listen(port, () => {
  console.log(`Server running at port ${port}`);
});

// https://www.google.com/search?q=how+are+you
