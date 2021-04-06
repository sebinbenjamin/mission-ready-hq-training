const express = require('express');
const cors = require('cors');

// Instantiate an application by calling the express() method
const app = express();

// Allows all CORS requests - ignoring security for NOW.
app.use(cors());

/** 
    Request is the HTTP request. It gives us all the request information, including the request parameters, the headers, the body of the request, and more.
    Response is the HTTP response object that we’ll send to the client.
**/
app
  .route('/hello')
  .get((req, res) => {
    console.log('POST called');
    // Express automatically sets the content type header as JSON
    res.send({
      name: 'Sebin',
      role: 'Developer',
    });
  })
  .put((req, res) => {
    console.log('PUT called');
    res.send('Hello PUT !');
  })
  .delete((req, res) => {
    console.log('DELETE called');
    res.send('Hello DELETE !');
  })
  .patch((req, res) => {
    console.log('PATCH called');
    res.send('Hello PATCH !');
  });
  
app.listen(3000, () => console.log('Server ready at port 3000'));
