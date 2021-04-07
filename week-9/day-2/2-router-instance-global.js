const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

const studentRouter = express.Router();
studentRouter.get('/current', (req, res) => {
  res.send('Here are the current students : Sebin, Jo, Mae');
});

studentRouter.get('/past', (req, res) => {
  res.send('Here are the previous students : Jeff, Dev, Mari');
});

// We are adding the studentRouter globally
// The requests to '/past' and '/current' are handled
app.use(studentRouter);

app.listen(3000, () => {
  console.log('Server running at port 3000');
});
