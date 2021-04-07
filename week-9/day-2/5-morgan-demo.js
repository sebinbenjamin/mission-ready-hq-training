const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const app = express();

app.use(cors());

/**
 * 
 *  A global middleware called at every request.
 *  Default format - Standard Apache combined log output
 * :remote-addr - :remote-user [:date] ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent" 
 *  ::1 - - [Wed, 07 Apr 2021 03:37:12 GMT] "GET /cars HTTP/1.1" 200 10 "-" "PostmanRuntime/7.26.10"
 * app.use(morgan());
*/

// ::1 - - [07/Apr/2021:03:41:17 +0000] "GET /cars HTTP/1.1" 200 10
// app.use(morgan("common"));

// GET /cars 200 10 - 12.274 ms
app.use(morgan("tiny"));

app.get('/hello', (req, res) => {
  res.send('Hello World');
});

app.get('/cars', (req, res) => {
  res.send('Hello cars');
});

app.listen(3000, () => {
  console.log('Server running at port 3000');
});
