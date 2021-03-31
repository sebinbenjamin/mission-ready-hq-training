const express = require('express');

// Instantiate an application by calling the express() method
const app = express();

// listen for GET requests on the / path | route, using the get() method.
app.get('/', (req, res) => {
  res.send('Hello World!');
});

/**
 * app - instance of express()
 * get - HTTP method
 * /cars - path (route) called
 * () => Handler fn
 */
app.get('/cars', (req, res) => {
  res.send('Hello Car World!');
});

const port = 3000;
app.listen(port, () => console.log(`Server running at port ${port}`));
