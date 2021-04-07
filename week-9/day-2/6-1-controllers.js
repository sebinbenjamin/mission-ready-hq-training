const helloController = (req, res) => {
  res.send('Hello World');
};

const carController = (req, res) => {
  res.send('Hello cars');
};

module.exports = {
  helloController,
  carController,
};
