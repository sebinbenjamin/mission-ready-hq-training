const express = require('express');
const cors = require('cors');

const { helloController, carController } = require('./7-controllers');

const app = express();

app.use(cors());

// const helloController = (req, res) => {
//   res.send('Hello World');
// };

app.get('/hello', helloController);

// const carController = (req, res) => {
//   res.send('Hello cars');
// }

app.get('/cars', carController);

app.listen(3000, () => {
  console.log('Server running at port 3000');
});
