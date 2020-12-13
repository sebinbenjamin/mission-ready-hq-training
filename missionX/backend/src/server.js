const express = require('express');

// Loads environment variables from a '.env' file stored in the project root
// and makes it available in 'process.env' object
require('dotenv').config();

const { port } = require('./config');

const { getConnection: getDBConnection } = require('./db');
const { errorHandler, simpleLogger } = require('./middlewares');
const projectRouter = require('./routes/project.routes');
const userRouter = require('./routes/user.routes');

// Init express
const app = express();
app.use(express.json());

// A simple Logger middleware
app.use(simpleLogger);

// Register Routers
app.use('/api/project', projectRouter);
app.use('/api/user', userRouter);

// 404 error
app.all('*', (req, res, next) => {
  const err = new HttpException(404, `Endpoint ${req.url} Not Found`);
  next(err);
});

// Error middleware - placed last, after all other middle wares and route handlers
app.use(errorHandler);

// Starting the server after connecting to DB
const startServer = async () => {
  try {
    await getDBConnection();
    app.listen(port, () => console.log(`🚀 Server running on port ${port}!`));
  } catch (e) {
    console.error(e);
  }
};

startServer();

// https://codeburst.io/better-error-handling-in-express-js-b118fc29e9c7
