const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

// A demo logger middleware
const demoLogger = (req, res, next) => {
  const timeNow = new Date();
  const { url, method, headers } = req;
  console.log(`Got a ${method} request on ${url} at ${timeNow.toISOString()}`);
  next();
};

// A demo middleware
const dummyMiddleware = (req, res, next) => {
  console.log(`Today is a good day`);
  next();
};

// A demo middleware
const luckyCall = (req, res, next) => {
  console.log(`Someone is lucky.`);
  next();
};

// demoLogger & dummyMiddleware used as a global middleware - No path is provided.
//  Middleware is called for EVERY requests.
app.use(dummyMiddleware);
app.use(demoLogger);

// luckyCall is used here as a path specific middleware
// Only called for the specified path.

app.use('/lucky', luckyCall);

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/car', (req, res) => {
  res.send('Hello car');
});

app.get('/apples', (req, res) => {
  res.send('Hello apples');
});

app.listen(3000, () => {
  console.log('Server running at port 3000');
});
