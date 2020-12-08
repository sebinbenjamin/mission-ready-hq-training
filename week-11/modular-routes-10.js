const express = require('express');
const router = express.Router();

router.get('/color', (req, res) => {
  console.log('Route handler for /car/color');
  res.send('The car is blue');
});

router.get('/make', (req, res) => {
  console.log('Route handler for /car/make');
  res.send('The car is built by Tesla');
});

module.exports = router;
