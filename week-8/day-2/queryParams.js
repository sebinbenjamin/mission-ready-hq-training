/**
 * The standard format of query parameters in a URL is 
 * 
 *                ?key1=value1&key2=value2&key3=value3
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
  const { url, query } = req;
  const queryParams = urlModule.parse(url).query;
  console.log('Query Parameters', queryParams);

  const queryStrings = queryStringModule.parse(queryParams);
  console.log('Car type:', queryStrings.type);
  console.log('Car color:', queryStrings.color);

  res.statusCode = 200;
  res.end(`
      <h1 style="color:red">
        Here are the query parameters called: 
      </h1>
      <h2>
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
