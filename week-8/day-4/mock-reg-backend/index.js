// npm install express cors
const express = require('express');
const cors = require('cors')

// Instantiate an application by calling the express() method
const app = express();
// Allows all CORS requests - ignoring security for NOW.
app.use(cors());
// Populates the req.body property with the parsed body
app.use(express.json());

// listen for GET requests on the / path | route, using the get() method.
app.post('/register', (req, res) => {
  // The data sent by the client.
  const { body } = req;
  console.log('body',body);
  if(body.username === 'Sebin'){
    res.status(409).send('Sorry Sebin, you already have an acoount. Please go to the login page')
  }
  else {
    res.send(`✔️ SUCCESS ✨✨✨ : You have registered a user with the name ${body.username}`);
  }
  });

const port = 5000;
app.listen(port, () => console.log(`Server running at port ${port}`));
