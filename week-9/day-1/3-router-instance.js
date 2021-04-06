const express = require('express');
const studentRouter = express.Router();

// A unique Endpoint => (Route path + a http Method) combination is unique.

// starts with a '/student'
// ? - means that the preceding character is optional
// /cars? => '/car' and '/cars' are matching
studentRouter.get('/cars?', (req, res) => {
  console.log('Get called');
  // Express automatically sets the content type header as JSON
  res.send({
    name: 'BMW',
    role: 'Sports',
  });
});

// starts with a '/student'
// + means "1 or more" copy of the previous character
// /hell+o => hello, helllo, hellllo
studentRouter.post('/hell+o', (req, res) => {
  console.log('POST called');
  // Express automatically sets the content type header as JSON
  res.send({
    name: 'Sebin',
    role: 'Developer',
  });
});


// starts with a '/student'
// * means any arbitrary character at the specified position
// /hell*o => hello, hellsaifhddsbuyvyo, hello
studentRouter.post('/hell*o', (req, res) => {
  console.log('POST called');
  // Express automatically sets the content type header as JSON
  res.send('Matching the * path');
});

// starts with a '/student'
// /wor(l)?d => word, world
studentRouter.delete('/wor(l)?d', (req, res) => {
  console.log('delete called');
  // Express automatically sets the content type header as JSON
  res.send('Matching the * path - delete called');
});

module.exports = studentRouter;
