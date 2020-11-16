const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  try {
    const data = fs.readFileSync('./pathParamsss.js', 'utf8');
    console.log('The file contains *******', data);
    res.setHeader('Content-Type', 'text/javascript');
    res.statusCode = 200;
    res.end(data);
  } catch (err) {
    console.log('Unable to read file', err.message);
    res.statusCode = 500;
    res.end(err.message);
  }
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
