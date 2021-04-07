const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

const studentRouter = express.Router();
studentRouter.get('/current', (req, res) => {
  res.send('Here are the current students : Sebin, Jo, Mae');
});

studentRouter.get('/past', (req, res) => {
  res.send('Here are the previous students : Jeff, Dev, Mari');
});

// A demo logger middleware
const demoLogger = (req, res, next) => {
  const timeNow = new Date();
  const { url, method, headers } = req;
  console.log(`Got a ${method} request on ${url} at ${timeNow.toISOString()}`);
  next();
};

// app.use('/student', demoLogger);

// We are adding the studentRouter to a specific path
// so, '/student/current' and '/student/past' are listened to here
// app.use('/student', studentRouter);
app.use('/student', demoLogger, studentRouter);

app.listen(3000, () => {
  console.log('Server running at port 3000');
});
