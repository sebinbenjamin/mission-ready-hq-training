const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  fs.readFile('./pathParams.js', 'utf8', (err, data) => {
    res.setHeader('Content-Type', 'text/javascript');
    res.statusCode = 200;
    res.end(data);
  });
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
