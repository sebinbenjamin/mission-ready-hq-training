const express = require('express');
const cors = require('cors')

// Instantiate an application by calling the express() method
const app = express();

// Allows all CORS requests - ignoring security for NOW.
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/user', (req, res) => {
  res.send('You have requested for a user');
});

app.get('/ballon', (req, res) => {
  res.send( `
  <h2 style="color:blue">Heres your ballon 
  </h2>
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Congrats_bqt.jpg/440px-Congrats_bqt.jpg">
  `);
});

// Get you frontend to call localhost:3000/car
app.get('/car', (req, res) => {
  res.send( `
    Heres your baloon 
    <img src="https://toy-content.imgix.net/product/siku-1598nz-police-car-2~1581385230.jpg?w=310&h=310&fit=fill&fm=jpg&bg=0FFF&s=6728508bd0df5747d04dd52d31df61cb">
  `);
});

const port = 3000;
app.listen(port, () => console.log(`Server running at port ${port}`));
