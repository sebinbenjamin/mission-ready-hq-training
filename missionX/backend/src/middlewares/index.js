const errorHandler = (err, req, res, next) => {
  if (res.headersSent) {
    return next(err);
  }
  res.status(500);
  res.render('error', { error: err });
};

const simpleLogger = (req, res, next) => {
  console.log(
    `Request Received: ${req.method} ${req.url}`,
    new Date().toISOString(),
  );
  next();
};

module.exports = { errorHandler, simpleLogger };
