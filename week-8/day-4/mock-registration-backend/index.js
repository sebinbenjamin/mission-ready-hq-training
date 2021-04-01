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
  const { body } = req;
  console.log('body',body);
  res.send(`✔️ SUCCESS ✨✨✨ : You have registered a user with the name ${body.username}`);
});

const port = 3000;
app.listen(port, () => console.log(`Server running at port ${port}`));
